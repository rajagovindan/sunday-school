import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ChildrenProfileFormComponent } from './children-profile-form/children-profile-form.component';
import { ChildrenProfileComponent } from './children-profile/children-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PrimengModule } from '../primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { TeachersProfileFormComponent } from './teachers-profile-form/teachers-profile-form.component';
import { ChildrenAcademicFormComponent } from './children-academic-form/children-academic-form.component';
import { AddAcademicDialogComponent } from './add-academic-dialog/add-academic-dialog.component';
import { AdvancedSearchComponentComponent } from './dashboard/advanced-search-component/advanced-search-component.component';
import { TeacherAdvancedSearchComponent } from './dashboard/teacher-advanced-search/teacher-advanced-search.component';
import { DashboardCounterCardComponent } from './dashboard/dashboard-counter-card/dashboard-counter-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    ChildrenProfileFormComponent,
    ChildrenProfileComponent,
    TeachersProfileFormComponent,
    ChildrenAcademicFormComponent,
    AddAcademicDialogComponent,
    AdvancedSearchComponentComponent,
    TeacherAdvancedSearchComponent,
    DashboardCounterCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PrimengModule,
    HttpClientModule
  ]
})
export class MainModule { }
