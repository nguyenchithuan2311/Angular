import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `<p>⏱️ Time: {{ time }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TimerComponent {
  time = new Date().toLocaleTimeString();

  constructor(private cd: ChangeDetectorRef, private zone: NgZone) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      // Trigger thủ công
      this.cd.markForCheck();
      // Hoặc thử: this.zone.run(() => {});
    }, 1000);
  }
}
