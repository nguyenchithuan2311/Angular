import { RouterOutlet } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-sample',
    standalone:true,
    template:`
    <div class="container">
    <h3>{{title}}</h3>
    <button (click)="onClick()">Click Me</button>
    </div>
    `,
    styles:[
      `
      .container{
        padding: 10px;
          border: 1px solid #ccc;
          text-align: center;
      }
      `
    ]
  })
  
  export class SampleComponent {
    @Input() title: string = 'Default Title';
    @Output() clicked = new EventEmitter<void>();
  
    onClick() {
      this.clicked.emit();
    }
  }