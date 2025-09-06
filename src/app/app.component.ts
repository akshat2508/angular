import { Component } from '@angular/core';
import { isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "";
  display:String = "";
  email:string = "";
  getName(event:Event)
  {
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
  }

  displayName(event:Event)
  {
    this.display = this.name;
  }

  setName(event:Event)
  {
    this.name = "akshat";
  }

  getEmail(val:string)
  {
    this.email = val;
  }

  setEmail()
  {
    this.email = "degault@gmail.com";
  }

}
