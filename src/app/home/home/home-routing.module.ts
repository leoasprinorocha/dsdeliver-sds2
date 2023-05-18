import { RouterModule, Routes } from "@angular/router";
import { LoginpageComponent } from "../loginpage/loginpage.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: LoginpageComponent,
    },

  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class HomeRoutingModule {}