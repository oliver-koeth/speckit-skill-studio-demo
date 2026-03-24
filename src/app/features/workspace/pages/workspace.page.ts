import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-workspace-page',
  template: `
    <section class="page-layout">
      <div class="page-card page-card--tinted">
        <p class="section-eyebrow">Workspace</p>
        <h1>Draft skills from a single shared studio shell.</h1>
        <p class="section-body">
          The workspace route is now framed by the global application shell so later feature work
          can focus on authoring flows instead of rebuilding navigation and branding.
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
export class WorkspacePageComponent {}
