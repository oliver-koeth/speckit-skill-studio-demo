import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-admin-page',
  template: `
    <section class="page-layout">
      <div class="page-card surface-frame">
        <p class="section-eyebrow">Admin</p>
        <h1>Administration tools share the same global frame.</h1>
        <p class="section-body">
          This placeholder confirms the admin entry point lives inside the common shell, with the
          header and route navigation staying consistent across the app.
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      h1 {
        font-size: clamp(2rem, 4vw, 2.75rem);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPageComponent {}
