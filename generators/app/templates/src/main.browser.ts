import { ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {defaultEncapsulation: ViewEncapsulation.None})
  .catch(err => console.error(err));
