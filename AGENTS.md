# Repository Guidance

- Keep the Angular app standalone-first: bootstrap in `src/main.ts`, register routes in `src/app/app.routes.ts`, and prefer `loadComponent` route entry points over NgModules.
- Preserve the feature-oriented structure under `src/app`: shared cross-cutting code belongs in `core/` or `shared/`, while route pages live under `features/<feature>/pages/`.
- When adding app-wide chrome, mount it as a standalone shell route in `src/app/app.routes.ts` and keep feature pages as child `loadComponent` entries so shared header/navigation stays centralized.
- Prefer Playwright for automated app verification. Do not reintroduce Karma/Jasmine unless the product requirements change.
- Keep browser specs under `tests/` with `playwright.config.ts` managing an `ng serve` webServer on `127.0.0.1:4200`; this is the expected local verification path for UI stories.
