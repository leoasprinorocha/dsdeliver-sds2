import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LoginpageComponent } from '../loginpage/loginpage.component';


@NgModule({
  declarations: [LoginpageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ],
  exports:[
    LoginpageComponent
  ]
  
})
export class HomeModule { }
