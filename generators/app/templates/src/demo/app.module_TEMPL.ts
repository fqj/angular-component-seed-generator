import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';

import { DemoComponent } from './demo.component';
import { ShellComponent } from './shell';
import { DemoSnippetComponent } from "./demo-snippet/demo-snippet.component";
import { DocIframeComponent } from "./doc-iframe/doc-iframe.component";

import { <%- componentClassName %> } from '../components/<%- componentName %>/<%- componentName %>.component';

/** `AppModule` is the main entry point into Angular2's bootstraping process */
@NgModule({
  bootstrap: [ ShellComponent ],
  declarations: [
    ShellComponent,
    <%- componentClassName %>,
    DemoSnippetComponent,
    DocIframeComponent,
    DemoComponent
  ],
  /** import Angular's modules and specify the lazyLoad modules preload strategy */
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ]
})

export class AppModule {
}
