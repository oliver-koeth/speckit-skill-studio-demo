# Repository Guidance

- Keep the Angular app standalone-first: bootstrap in `src/main.ts`, register routes in `src/app/app.routes.ts`, and prefer `loadComponent` route entry points over NgModules.
- Preserve the feature-oriented structure under `src/app`: shared cross-cutting code belongs in `core/` or `shared/`, while route pages live under `features/<feature>/pages/`.
- Prefer Playwright for automated app verification. Do not reintroduce Karma/Jasmine unless the product requirements change.
