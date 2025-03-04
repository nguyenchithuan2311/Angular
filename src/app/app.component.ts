
import { RouterOutlet } from '@angular/router';
import { Component} from '@angular/core';
import { SampleComponent } from './sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // message ='';
  // title = 'first-project';
  // onClickButton() {
  //  this.message = 'Bạn đã nhấn vào nút!'
  // }
  onClickButton() {
    alert('Bạn đã nhấn vào nút!');
  }
}

