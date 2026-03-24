import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/app-shell.component').then((m) => m.AppShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/workspace/pages/workspace.page').then((m) => m.WorkspacePageComponent)
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./features/admin/pages/admin.page').then((m) => m.AdminPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
