CREATE TABLE public.project_matcher_provider_state (
  id boolean PRIMARY KEY DEFAULT true CHECK (id = true),
  provider_denied boolean NOT NULL DEFAULT false,
  denial_message text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.project_matcher_provider_state TO service_role;
ALTER TABLE public.project_matcher_provider_state ENABLE ROW LEVEL SECURITY;