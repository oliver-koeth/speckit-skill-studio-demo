import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserStorageService } from './core/services/browser-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [BrowserStorageService],
      useFactory: (browserStorage: BrowserStorageService) => () => browserStorage.bootstrap()
    }
  ]
};
