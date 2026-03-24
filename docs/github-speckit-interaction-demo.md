# GitHub Spec Kit Interaction Demo

This document shows how the series can be used in a GitHub Spec Kit workflow.

## Feature name

`001-skill-studio`

## Example interaction flow

### 1. Specify

Spec Kit command:

```text
/speckit.specify Create a browser-only Angular web app called Skill Studio. It must create, read, update, delete, and export SKILL.md files for agent skills. Skills are organized by a single admin-managed tag. Provide a split view with a CodeMirror markdown editor and rendered preview. Add an admin page for API key storage and tag CRUD. Generate skills from a prompt using OpenAI GPT-5.3 Instant through a direct browser API call. Style the application close to the NTT DATA website look and feel.
```

Expected output artifact:

- `spec.md`

### 2. Plan

Spec Kit command:

```text
/speckit.plan Create a technical plan for the approved specification. Use Angular standalone components, localStorage persistence, CodeMirror 6, Playwright end-to-end testing, and no backend. Include architecture, routing, storage schema, OpenAI integration boundaries, security caveats, and accessibility requirements.
```

Expected output artifact:

- `plan.md`
- supporting design artifacts such as `research.md`, `data-model.md`, `design.md`, and `contracts/*`

### 3. Tasks

Spec Kit command:

```text
/speckit.tasks Break the approved implementation plan into ordered tasks that can be executed by a coding agent. Include only end-to-end tests, no unit-test tasks.
```

Expected output artifact:

- `tasks.md`

### 4. Implement

Spec Kit command:

```text
/speckit.implement Implement the feature end-to-end following the spec and plan. Keep the app browser-only, persist state in localStorage, and add Playwright coverage for all critical journeys.
```

## Example repository structure

```text
skill-studio/
  src/
  e2e/
  specs/
    001-skill-studio/
      spec.md
      plan.md
      research.md
      data-model.md
      design.md
      quickstart.md
      tasks.md
      contracts/
        openai-generation.md
```

## Definition of done for the demo

- User can create, edit, save, delete, and export `SKILL.md` files
- User can generate a skill draft from a prompt using OpenAI
- User can assign exactly one admin-managed tag to a skill
- User can manage tags and OpenAI API key from the admin page
- User can browse skills by tag and open them in editor + preview split view
- Playwright tests cover all critical journeys
