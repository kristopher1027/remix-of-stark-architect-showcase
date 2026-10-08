ALTER TABLE public.project_matcher_provider_state
  ADD COLUMN workspace_paused boolean NOT NULL DEFAULT false,
  ADD COLUMN pause_message text;