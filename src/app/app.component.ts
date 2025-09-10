import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users=['Anik' , 'Sidhu' , 'sa','peter', 'praveen' , 'bhasker', 'akshat'];

}
