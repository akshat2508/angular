import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


userName:string | null = "";

constructor(private route:ActivatedRoute){}

ngOnInit()
{
  this.route.queryParams.subscribe(params=>{
     this.userName=(params['name']);
      
  })
}


}
