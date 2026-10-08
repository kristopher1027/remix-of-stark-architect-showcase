# Project Rules

- Keep the public homepage as a single, integrated portfolio for Christopher Okoh; it replaces the former architecture and graphic-design studio showcase to avoid mixed branding.
- Keep visitor-facing AI in a Lovable Cloud Edge Function, with gateway credentials and persistent provider-denial state server-side, so public portfolio interactions cannot expose secrets or bypass terminal access blocks.
- Share only gateway correlation helpers under `supabase/functions/_shared`; keep feature-specific prompts and request logic inside the feature function to limit coupling.