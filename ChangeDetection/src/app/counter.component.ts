import { ChangeDetectionStrategy, Component, OnInit, DoCheck, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>➕ Counter: {{ count }}</p>
    <button (click)="increment()">+1</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CounterComponent implements OnInit, DoCheck, AfterViewChecked {
  count = 0;

  constructor() {
    console.log('[Counter] constructor');
  }

  increment() {
    this.count++;
  }

  ngOnInit() {
    console.log('[Counter] ngOnInit');
  }

  ngDoCheck() {
    console.log('[Counter] ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log('[Counter] ngAfterViewChecked');
  }
}
