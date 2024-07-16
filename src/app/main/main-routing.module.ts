import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/Auth/auth.guard';
import { MainComponent } from './main/main.component';
import { ChildrenProfileFormComponent } from './children-profile-form/children-profile-form.component';

const routes: Routes = [{ 
  path: '', component: MainComponent,
  children:[
    {
      path:'dashboard',
      component: DashboardComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'children-details',
      component: ChildrenProfileFormComponent,
      canActivate:[AuthGuard]
    }
  ] 
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
