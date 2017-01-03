import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'demo-snippet',
  template: `
    <div class="demo-snippet" #demo>
      <ng-content></ng-content>
      <div class="demo-snippet__transclusion"></div>
    </div>
  `,
  styleUrls: [ './demo-snippet.component.css']
})

export class DemoSnippetComponent implements AfterViewInit {
  @ViewChild('demo') content:any;

  ngAfterViewInit() {
    const reflectContent = this.content.nativeElement.children[0].outerHTML.replace('ng-reflect-', '');
    this.content.nativeElement.children[1].append(reflectContent);
  }
}
