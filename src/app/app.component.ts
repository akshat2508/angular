import { Component } from '@angular/core';
import { isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = true;
  btntext:string = "Hide div"
  valueToMatch:number=0;
  togDis()
  {
    if(this.display === true)
    {
      this.display  = false;
      this.btntext  = "Show div";

    }
    else{
      this.display = true;
      this.btntext = "Hide div";
    }
  }

}
