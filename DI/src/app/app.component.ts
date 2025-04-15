import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogService } from './log.service';
import { randomFactory, RandomService } from './random.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiLoggerToken } from './injectoken.service';
import { ConfigToken } from './injectoken.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  providers: [
    { provide: RandomService, useFactory: randomFactory},
    { provide: ConfigToken, useValue: '🚀 Production Mode' },
    { provide: MultiLoggerToken, useValue: () => console.log('Logger A'), multi: true },
    { provide: MultiLoggerToken, useValue: () => console.log('Logger B'), multi: true },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  private randomService = inject(RandomService);
  private logger = inject(LogService);
  protected message = '';
  protected isRunning = false;
  private config = inject(ConfigToken);
  private multiLoggers = inject(MultiLoggerToken);
  constructor() {
    this.logger.log('AppComponent initialized!');
  }
  run() {
    this.isRunning = !this.isRunning;
    this.logger.log('Random number: ' + this.randomService.getRandomNumber());
    console.log('Config:', this.config);
    this.multiLoggers.forEach(fn => fn());
  }
  title = 'DI';
}
