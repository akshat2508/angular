import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmitFlags, isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  students =["anil", "sam" ,'peter'];

  studentData =[
    {
    name:'Anil',
    age: '29',
    email: 'anil@gmail.com'
    },
    {
    name:'Sam',
    age: '30',
    email: 'Sam@gmail.com'
    },
    {
    name:'sahil',
    age: '31',
    email: 'Sahil@gmail.com'
    },
    {
    name:'sheikjh',
    age: '32',
    email: 'sheikhj@gmail.com'
    },
]




}
