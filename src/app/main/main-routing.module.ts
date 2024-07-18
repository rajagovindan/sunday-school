import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/Auth/auth.guard';
import { MainComponent } from './main/main.component';
import { ChildrenProfileFormComponent } from './children-profile-form/children-profile-form.component';
import { TeachersProfileFormComponent } from './teachers-profile-form/teachers-profile-form.component';
import { ChildrenAcademicFormComponent } from './children-academic-form/children-academic-form.component';

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
    },
    {
      path:'children-academic-details',
      component: ChildrenAcademicFormComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'teachers-details',
      component: TeachersProfileFormComponent,
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
