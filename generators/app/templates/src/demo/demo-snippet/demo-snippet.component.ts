import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'demo-snippet',
  template: `
    <div class="demo-snippet" #demo>
      <div class="demo-snippet__content">
        <ng-content></ng-content>
      </div>
      <pre class="prettyprint demo-snippet__transclusion"></pre>
    </div>
  `,
  styleUrls: [ './demo-snippet.component.css']
})

export class DemoSnippetComponent implements AfterViewInit {
  @ViewChild('demo') content:any;

  ngAfterViewInit() {
    const element = this.content.nativeElement.children[0].children[0];
    let elem = `<${element.tagName.toLowerCase()}`;
    for(let attr of element.attributes) {
      elem = `${elem} ${attr.name.replace('ng-reflect-', ''}='${attr.value}'`;
    }
    elem = `${elem}></<${element.tagName.toLowerCase()}>`;
    this.content.nativeElement.children[1].append(elem);
  }

}
