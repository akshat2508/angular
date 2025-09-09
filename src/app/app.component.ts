import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = signal('akshat');
  count  =signal(0);

  displayHeading = true;
  constructor()
  {
    effect(()=>{
      if(this.count( ) == 2)
      {
        setTimeout(() => {
          this.displayHeading = false;
        }, 2000);
      }
    })
  }

  toggleValue()
  {
   this.count.set(this.count() +1);
  }




}
