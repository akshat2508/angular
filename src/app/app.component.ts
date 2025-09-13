import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgcolor = "green";
  fontSize = 20;

  headingSizeBig = "40px";
  headingSizeSmall = "30px";
  zoom = true;

  changeSize()
  {
   this.zoom=!this.zoom;
  }

  


}
