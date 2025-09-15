import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '/',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}
  goToProfile()
  {
    this.router.navigate(['profile'], {queryParams:{name: 'Akshat Paul'}});
  }
}
