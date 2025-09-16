import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  name:null |string ='';
 constructor(private route:ActivatedRoute){}


 ngOnInit()
 {
  this.route.params.subscribe((params) => {
    console.log(params);
    this.name=params['name'];
  })
 }
}
