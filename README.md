# Skill Studio Spec Kit Demo

This package contains a Spec Kit style series for a browser-only Angular web application that creates, reads, updates, deletes, and exports `SKILL.md` files for agent skills.

## GitHub Spec Kit installation

Install the GitHub Spec Kit CLI with `uv`:

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Then initialize a new project or the current directory:

```bash
specify init skill-studio
specify init . --ai codex
```

If you prefer a one-time run without a persistent install:

```bash
uvx --from git+https://github.com/github/spec-kit.git specify init skill-studio
```

## Included artifacts

- `docs/github-speckit-interaction-demo.md` — example GitHub Spec Kit interaction flow
- `docs/ralph-for-codex-interaction-demo.md` — example Ralph for Codex workflow using `ralph.sh`, `prd`, and `ralph`
- `specs/001-skill-studio/spec.md` — product requirements and acceptance criteria
- `specs/001-skill-studio/plan.md` — implementation plan, architecture, and technical decisions
- `specs/001-skill-studio/research.md` — rationale for major choices
- `specs/001-skill-studio/data-model.md` — domain model and storage schema
- `specs/001-skill-studio/design.md` — UX, visual design, and component design
- `specs/001-skill-studio/quickstart.md` — local setup and run guide
- `specs/001-skill-studio/contracts/openai-generation.md` — OpenAI generation request/response contract
- `specs/001-skill-studio/tasks.md` — ordered implementation tasks

## Summary

- Framework: Angular + TypeScript
- Editor: CodeMirror 6
- Tests: Playwright end-to-end only
- Storage: Browser localStorage
- AI generation: direct browser call using an OpenAI API key entered on an admin page
- Skill taxonomy: single tag per skill; tags are admin-managed only
- Export: Markdown (`.md`) per skill
- UI direction: close to NTT DATA brand language, with enterprise styling and logo placement

## Security note

Because this app has no backend, any OpenAI API key stored in browser localStorage is not secure. The admin page in this demo is for convenience, not real security isolation.
