import { ChangeDetectionStrategy, Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from './clock.component';
import { CounterComponent } from './counter.component';
import { ManualComponent } from './manual.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimerComponent, CounterComponent, ManualComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private vcRef: ViewContainerRef) {}
  title = 'ChangeDetection';
  ngOnInit() {
    const ref = this.vcRef.createComponent(ManualComponent);
    ref.changeDetectorRef.detach(); // 👈 Tách hoàn toàn khỏi CD
  }
}
