import { Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DocIframeComponent } from "./doc-iframe/doc-iframe.component";
import { TestsIframeComponent} from './tests-iframe/tests-iframe.component';

export const ROUTES: Routes = [
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'reports',
    component: TestsIframeComponent
  },
  {
    path: 'docs',
    component: DocIframeComponent
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  }
];

