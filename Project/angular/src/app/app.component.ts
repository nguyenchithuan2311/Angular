import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';
import { ProjectedComponent } from './projected.component';
import { EmojiService } from './emoji.service';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, ProjectedComponent],
  providers: [
    { provide: EmojiService, useValue: { emoji: '🌎' } }
  ],
  template: `
    <h1>🌍 Emoji World</h1>
    <child>
      <projected></projected>
    </child>
  `
})
export class AppComponent {
  title = 'angular';
}
