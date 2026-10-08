import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

type MatcherProject = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  demo?: string;
};

type Match = { projectNumber: string; reason: string };

type ProjectMatcherProps = { projects: MatcherProject[] };

const ProjectMatcher = ({ projects }: ProjectMatcherProps) => {
  const [description, setDescription] = useState("");
  const [matches, setMatches] = useState<Match[] | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = description.trim();
    if (query.length < 8 || query.length > 600 || loading) return;

    setLoading(true);
    setMatches(null);
    setErrorMessage("");

    try {
      const { data, error } = await supabase.functions.invoke("project-matcher", {
        body: { description: query },
      });
      if (error) {
        let message = error.message;
        if ("context" in error && error.context instanceof Response) {
          try {
            const payload = await error.context.clone().json() as { error?: unknown };
            if (typeof payload.error === "string") message = payload.error;
          } catch {
            // Keep the SDK's safe, user-facing error message when the body isn't readable.
          }
        }
        throw new Error(message);
      }
      if (!data || !Array.isArray(data.recommendations)) {
        throw new Error("The recommendation could not be completed. Please try again.");
      }
      setMatches(data.recommendations as Match[]);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "The recommendation could not be completed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const matchedProjects = matches?.flatMap((match) => {
    const project = projects.find((item) => item.number === match.projectNumber);
    return project ? [{ ...project, reason: match.reason }] : [];
  });

  return (
    <div className="project-matcher">
      <div className="matcher-heading">
        <div className="section-index"><span><Sparkles size={13} aria-hidden="true" /> FIND THE RIGHT PROJECT</span></div>
        <p>Share the skills or experience you need, and I’ll point you to the closest match.</p>
      </div>

      <form className="matcher-form" onSubmit={handleSubmit}>
        <Label className="matcher-label" htmlFor="project-needs">What are you looking for?</Label>
        <Textarea
          id="project-needs"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="For example: an AI tool that searches a knowledge base and helps people explore local culture."
          maxLength={600}
          minLength={8}
          required
          aria-describedby="matcher-hint matcher-status"
          disabled={loading}
          className="matcher-textarea"
        />
        <div className="matcher-form-footer">
          <span id="matcher-hint" className="matcher-count">{description.length}/600</span>
          <Button type="submit" disabled={loading || description.trim().length < 8} className="matcher-submit">
            {loading ? <LoaderCircle className="matcher-spinner" aria-hidden="true" /> : <Search aria-hidden="true" />}
            {loading ? "Finding matches" : "Find a match"}
          </Button>
        </div>
      </form>

      <div id="matcher-status" className="matcher-status" aria-live="polite" aria-atomic="true">
        {loading && <p className="matcher-loading">Comparing your needs with the portfolio projects…</p>}
        {errorMessage && <p className="matcher-error" role="alert">{errorMessage}</p>}
        {matches && matchedProjects && (
          <div className="match-results">
            <p className="match-results-heading">{matchedProjects.length ? "CLOSEST MATCHES" : "NO CLOSE MATCHES"}</p>
            {matchedProjects.length ? matchedProjects.map((project) => (
              <article className="match-result" key={project.number}>
                <span className="match-result-number">{project.number}</span>
                <div className="match-result-copy">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.reason}</p>
                  <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="match-result-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={14} aria-hidden="true" /></a>}
                  <a href={project.href} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} aria-hidden="true" /></a>
                </div>
              </article>
            )) : <p className="match-empty">No listed project closely matches that description.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMatcher;