import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: '<%- componentName %>',
  templateUrl: '<%- componentName %>.component.html',
  styleUrls: ['<%- componentName %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%- componentClassName %> {

  @Input() name:string;

  constructor() {}

  getConcatenatedName():string {
    return `My name is ${this.name} and you know it!`
  }

}
