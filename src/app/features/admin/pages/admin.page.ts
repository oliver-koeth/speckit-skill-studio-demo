import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-admin-page',
  template: `
    <section class="page-card">
      <p class="eyebrow">Admin</p>
      <h1>Administration tools share the same global frame.</h1>
      <p class="body">
        This placeholder confirms the admin entry point lives inside the common shell, with the
        header and route navigation staying consistent across the app.
      </p>
    </section>
  `,
  styles: [
    `
      .page-card {
        max-width: 48rem;
        padding: 2rem;
        border: 1px solid #d4e0ef;
        border-radius: 1.5rem;
        background: #ffffff;
        box-shadow: 0 28px 80px rgba(14, 31, 53, 0.08);
      }

      .eyebrow {
        margin: 0 0 0.75rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #1f5db8;
      }

      h1 {
        margin: 0 0 1rem;
        font-size: clamp(2rem, 4vw, 2.75rem);
      }

      .body {
        margin: 0;
        max-width: 42rem;
        line-height: 1.6;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPageComponent {}
