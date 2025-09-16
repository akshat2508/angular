import { Component } from '@angular/core';
import { Router , RouterLink } from '@angular/router';

@Component({
  selector: '/',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
users = [
  {
    id: '1',
    name:'Anil',
    age: 20,
    email: 'anil@gmail.com'
  },
   {
    id: '2',
    name:'akshat',
    age: 20,
    email: 'akshat@gmail.com'
  },
   {
    id: '3',
    name:'vishwas',
    age: 20,
    email: 'vishwas@gmail.com'
  },
   {
    id: '4',
    name:'satyam',
    age: 20,
    email: 'satyam@gmail.com'
  }
]

  
}
