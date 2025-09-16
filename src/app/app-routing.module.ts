import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'about' , component:AboutComponent},
    {path: 'login' , component:LoginComponent},
      {path: 'contact' , component:ContactComponent},
      {path: 'header' , component:HeaderComponent},
      {path:'home' ,component:HomeComponent},
      {path: 'profile' ,component:ProfileComponent},
      {path: 'user/:id/:name/:email' ,component:UserComponent},
      {path: '' , redirectTo:'home' , pathMatch:"full"},
      {path:'**' , component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
