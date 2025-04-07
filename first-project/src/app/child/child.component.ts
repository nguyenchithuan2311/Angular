import { Component, inject } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  providers: [
    { provide: FlowerService, useValue: { emoji: '🌻' } } // hoa hướng dương
  ],
  viewProviders: [
    { provide: AnimalService, useValue: { emoji: '🐶' } } // chó
  ]
})
export class ChildComponent {
  flower = inject(FlowerService);
  animal = inject(AnimalService);
}
