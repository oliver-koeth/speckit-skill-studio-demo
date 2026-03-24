# Quickstart: Skill Studio

## Prerequisites

- Node.js LTS
- npm
- Angular CLI installed
- Playwright browsers installed

## Install

```bash
npm install
npx playwright install
```

## Run the app

```bash
npm start
```

## Run end-to-end tests

```bash
npm run e2e
```

## Demo checklist

1. Open the app.
2. Verify default tags exist.
3. Go to Admin and set an OpenAI API key.
4. Return to workspace and create a skill from template.
5. Save the skill.
6. Generate a new skill from prompt.
7. Export a saved skill as markdown.

## Suggested npm scripts

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui"
  }
}
```
