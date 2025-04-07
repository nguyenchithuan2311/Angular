import { Component, inject } from "@angular/core";
import { EmojiService } from "./emoji.service";

@Component({
    selector:'projected',
    standalone: true,
    template: `<p>🌟 ProjectedComponent emoji: {{ emojiService.emoji }}</p>`
})

export class ProjectedComponent{
    emojiService = inject(EmojiService);
}