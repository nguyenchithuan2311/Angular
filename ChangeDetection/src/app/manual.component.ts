import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: `
    <p>🛠️ Manual: {{ value }}</p>
    <button (click)="change()">Change</button>
    <button (click)="detect()">Force Update</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ManualComponent implements OnInit, DoCheck, AfterViewChecked {
  value = 'Initial';

  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
    console.log('[Manual] constructor');
  }

  change() {
    this.value = Date.now().toString();
    console.log('[Manual] change()');
    this.cd.detectChanges();
  }

  detect() {
    console.log('[Manual] detect()');
    this.cd.detectChanges();
  }

  ngOnInit() {
    console.log('[Manual] ngOnInit');
  }

  ngDoCheck() {
    console.log('[Manual] ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log('[Manual] ngAfterViewChecked');
  }
}
