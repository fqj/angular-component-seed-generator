import {Component, ViewEncapsulation, Renderer} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app-shell',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['shell.component.scss'],
  templateUrl: 'shell.component.html'
})

export class ShellComponent {

    private page:string;
    private componentName:string;
    menu:boolean;

    constructor(private renderer: Renderer){}

    ngOnInit() {
      this.componentName = '<%- componentClassName %>';
      this.page = 'demo';
    }

    toggleMenu() {
      this.menu = !this.menu;
    }

  }
