import { Component, inject } from "@angular/core";
import { EmojiService } from "./emoji.service";

@Component({
    selector: 'child',
    standalone: true,
    template: `
    <div style="border: 2px dashed blue; padding: 1rem; margin: 1rem;">
      <p>💠 ChildComponent emoji: {{ emojiService.emoji }}</p>
      <ng-content></ng-content>
    </div>
  `,
  viewProviders: [
    { provide: EmojiService, useValue: { emoji: '🐶' } }
    // hoặc viewProviders: [{ provide: EmojiService, useValue: { emoji: '🐶' } }]
  ]
})

export class ChildComponent{
    emojiService = inject(EmojiService);
}