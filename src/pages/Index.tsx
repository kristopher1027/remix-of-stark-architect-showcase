import { ArrowDown, ArrowRight, ArrowUpRight, AtSign, Award, Blocks, Braces, Github, Globe2, Linkedin, MapPin, Radio, Sparkles, Workflow } from "lucide-react";
import Navigation from "@/components/Navigation";
import idomaPreview from "@/assets/portfolio/idomaconnect-preview.jpg.asset.json";
import aijePreview from "@/assets/portfolio/aije-community-shield-preview.jpg.asset.json";

const projects = [
  {
    number: "01",
    title: "DevFlow AI",
    category: "AI · Developer tools",
    description: "An AI-powered engineering workspace that brings repository context and practical code intelligence closer to the developer workflow.",
    stack: ["Go", "React", "PostgreSQL", "RAG"],
    href: "https://github.com/kristopher1027/devflow-ai",
    kind: "devflow",
  },
  {
    number: "02",
    title: "IdomaConnect AI",
    category: "AI · Culture & heritage",
    description: "A home for Idoma knowledge: a verified cultural knowledge base, conversational AI and an interactive map of heritage sites.",
    stack: ["React", "TypeScript", "RAG", "Maps"],
    href: "https://github.com/kristopher1027/the-build-compass",
    demo: "https://the-build-compass.lovable.app",
    image: idomaPreview.url,
    imageAlt: "IdomaConnect cultural knowledge and heritage platform",
  },
  {
    number: "03",
    title: "AIJE Community Shield",
    category: "Community · Public safety",
    description: "An emergency and community-safety platform for Benue State, with incident reporting, mapped resources and offline-aware tools.",
    stack: ["React", "TypeScript", "Tailwind", "Maps"],
    href: "https://github.com/Stonez-Digital/AIJE-Development-Roadmap",
    demo: "https://aije-development-roadmap.pages.dev/",
    image: aijePreview.url,
    imageAlt: "AIJE Community Shield emergency and community safety platform",
  },
];

const skillGroups = [
  { title: "Frontend", skills: ["HTML & CSS", "JavaScript", "TypeScript", "React"] },
  { title: "Backend", skills: ["Go", "Python", "FastAPI", "REST APIs"] },
  { title: "Data & AI", skills: ["PostgreSQL", "LLM APIs", "RAG", "AI integration"] },
  { title: "Tools & workflow", skills: ["Git & GitHub", "Docker", "Supabase", "System design"] },
];

const milestones = [
  { name: "Learn2Earn Fellow", detail: "AI & Software Engineering", status: "In progress" },
  { name: "Nithub × DataCamp", detail: "Data & AI scholarship", status: "In progress" },
  { name: "3MTT Fellow", detail: "Technology & Innovation", status: "In progress" },
  { name: "01 Edu · Piscine", detail: "Software development", status: "Completed" },
];

const highlights = [
  { icon: Blocks, title: "Three real-world builds", detail: "AI, full-stack products and community impact" },
  { icon: Award, title: "Nithub × DataCamp", detail: "Selected for the Data & AI scholarship" },
  { icon: Radio, title: "Idoma Centenary Plus", detail: "Hackathon participant · 2026" },
  { icon: Workflow, title: "Always in progress", detail: "Building skills for the long run" },
];

const Index = () => (
  <div className="portfolio-page" id="home">
    <Navigation />

    <main>
      <section className="intro-section">
        <div className="intro-grid page-width">
          <div className="intro-copy">
            <div className="availability"><span className="availability-dot" /> Open to opportunities</div>
            <p className="intro-eyebrow">INDEPENDENT DEVELOPER <span>·</span> NIGERIA</p>
            <h1>Christopher<br /><span className="name-accent">Okoh</span><span className="name-period">.</span></h1>
            <div className="intro-role"><span /> Full-stack &amp; AI engineer</div>
            <p className="intro-description">I build useful software with thoughtful AI, solid engineering and real people in mind.</p>
            <div className="intro-actions">
              <a href="#projects" className="button-primary">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
              <a href="mailto:etzkristokency2@gmail.com" className="button-text">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="intro-socials" aria-label="Social links">
              <a href="https://github.com/kristopher1027" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={17} /></a>
              <a href="https://www.linkedin.com/in/christopher-okoh-391933430/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
              <a href="mailto:etzkristokency2@gmail.com" aria-label="Email"><AtSign size={17} /></a>
              <span className="social-caption">Build carefully. Learn continuously.</span>
            </div>
          </div>

          <div className="intro-visual" aria-label="Developer identity illustration">
            <div className="visual-coordinate">09°04′N&nbsp; 07°29′E</div>
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="visual-cross visual-cross-one" /><div className="visual-cross visual-cross-two" />
            <div className="visual-core"><span>CO</span><i /></div>
            <div className="visual-code"><span className="code-light">01</span> systems<br /><span className="code-light">02</span> people<br /><span className="code-light">03</span> possibility</div>
            <div className="visual-caption"><span>BUILDING AT THE INTERSECTION</span><span>OF AI &amp; EVERYDAY LIFE</span></div>
            <span className="visual-star">✳</span>
          </div>
        </div>
        <div className="intro-bottom page-width"><span>SOFTWARE THAT DOES SOMETHING MEANINGFUL</span><a href="#about">Scroll to explore <ArrowDown size={14} aria-hidden="true" /></a></div>
      </section>

      <section id="about" className="about-section section-space">
        <div className="page-width about-grid">
          <div className="section-index"><span>01 / A LITTLE ABOUT ME</span><span className="index-rule" /></div>
          <div className="about-content"><h2>Turning ideas into <span>intelligent solutions.</span></h2>
            <p>I’m a developer drawn to the space between AI, backend systems and full-stack product work. I like getting close to the problem, learning what people actually need and building software that makes a meaningful difference.</p>
            <div className="about-facts">
              <div><MapPin size={17} aria-hidden="true" /><span><b>Based in</b>Nigeria · open to remote</span></div>
              <div><Braces size={17} aria-hidden="true" /><span><b>Currently exploring</b>Go, system design &amp; advanced AI</span></div>
              <div><Sparkles size={17} aria-hidden="true" /><span><b>Working toward</b>Building impactful AI-powered products</span></div>
            </div>
          </div>
          <blockquote className="about-quote"><span>“</span>Technology is most powerful when it brings people, ideas and opportunities together.<i>— Christopher Okoh</i></blockquote>
        </div>
      </section>

      <section id="projects" className="projects-section section-space">
        <div className="page-width">
          <div className="section-heading"><div><div className="section-index"><span>02 / SELECTED WORK</span></div><h2>Built to be <span>useful.</span></h2></div><p>Three projects shaped by curiosity, practical engineering and a belief that technology can serve people.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.number} className="project-row">
                <div className="project-image-wrap">
                  {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : (
                    <div className="devflow-art" aria-label="Illustrated preview of the DevFlow AI developer workspace">
                      <div className="devflow-topline"><span>DEVFLOW</span><span>WORKSPACE / 001</span></div>
                      <div className="devflow-window"><div className="window-rail"><i /><i /><i /><span>REPOSITORY</span><b>▤ &nbsp; api.go</b><b>▤ &nbsp; agents.go</b><b>▤ &nbsp; memory.go</b></div><div className="window-code"><span>01 &nbsp; <i>func</i> BuildWithContext(repo Repository) &#123;</span><span>02 &nbsp;&nbsp; assistant := NewAssistant(repo)</span><span>03 &nbsp;&nbsp; answer, err := assistant.Ask(prompt)</span><span>04 &nbsp;&nbsp; <i>return</i> answer, err</span><span>05 &#125;</span><span className="devflow-suggestion">✳&nbsp; Context found across 12 files</span></div></div>
                      <div className="devflow-foot"><span>CODE WITH THE WHOLE PICTURE.</span><span>AI · RAG · ENGINEERING</span></div>
                    </div>
                  )}
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-description">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={15} /></a>}<a href={project.href} target="_blank" rel="noreferrer">Source on GitHub <ArrowUpRight size={15} /></a></div>
                </div>
              </article>
            ))}
          </div>
          <a href="https://github.com/kristopher1027" className="all-projects-link" target="_blank" rel="noreferrer">More experiments on GitHub <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="skills" className="skills-section section-space">
        <div className="page-width skills-layout">
          <div className="skills-heading"><div className="section-index"><span>03 / TOOLS OF THE TRADE</span></div><h2>Always learning.<br /><span>Always building.</span></h2><p>A practical, growing toolkit for turning rough ideas into working software.</p></div>
          <div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3>{group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>)}</div>
        </div>
      </section>

      <section id="journey" className="journey-section section-space">
        <div className="page-width journey-grid">
          <div><div className="section-index"><span>04 / THE JOURNEY SO FAR</span></div><h2>Growing through<br /><span>the work.</span></h2><p>Learning by doing, staying curious and showing up for the next challenge.</p></div>
          <div className="journey-list">{milestones.map((item, index) => <div className="journey-item" key={item.name}><span className="journey-counter">0{index + 1}</span><div className="journey-detail"><h3>{item.name}</h3><p>{item.detail}</p></div><span className={`journey-status ${item.status === "Completed" ? "is-complete" : ""}`}><i />{item.status}</span></div>)}</div>
        </div>
        <div className="page-width achievements-strip"><div className="section-index"><span>SMALL WINS, BIG MOTIVATION</span></div><div className="achievement-grid">{highlights.map(({ icon: Icon, title, detail }) => <div className="achievement" key={title}><Icon size={19} aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></div>)}</div></div>
      </section>

      <section id="contact" className="contact-section section-space"><div className="page-width contact-layout">
        <div><div className="section-index"><span>05 / YOUR TURN</span></div><h2>Let’s make something<br /><span>that matters.</span></h2><p>Have a project, an opportunity or a problem worth solving? I’d love to hear from you.</p><a href="mailto:etzkristokency2@gmail.com" className="button-primary contact-cta">Start a conversation <ArrowUpRight size={16} /></a></div>
        <div className="contact-details"><div className="contact-availability"><span className="availability-dot" /> Open to new opportunities</div><a href="mailto:etzkristokency2@gmail.com"><AtSign size={17} />etzkristokency2@gmail.com<ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/christopher-okoh-391933430/" target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={15} /></a><a href="https://github.com/kristopher1027" target="_blank" rel="noreferrer"><Github size={17} />GitHub<ArrowUpRight size={15} /></a><a href="https://github.com/kristopher1027" target="_blank" rel="noreferrer"><Globe2 size={17} />Projects &amp; code<ArrowUpRight size={15} /></a></div>
      </div></section>
    </main>

    <footer className="site-footer"><div className="page-width footer-inner"><a className="footer-brand" href="#home">CO<span>—</span>CHRISTOPHER OKOH</a><span>© 2026 Christopher Okoh · Made with intention.</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></footer>
  </div>
);

export default Index;