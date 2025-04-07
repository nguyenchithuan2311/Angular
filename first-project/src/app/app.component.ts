
import { RouterOutlet } from '@angular/router';
import { Component, inject} from '@angular/core';
import { SampleComponent } from './sample.component';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // message ='';
  // title = 'first-project';
  // onClickButton() {
  //  this.message = 'Bạn đã nhấn vào nút!'
  // }
  flower = inject(FlowerService);
  animal = inject(AnimalService);
  onClickButton() {
    alert('Bạn đã nhấn vào nút!');
  }
}

