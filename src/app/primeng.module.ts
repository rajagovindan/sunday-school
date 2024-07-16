import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

const primeModules = [
  TableModule,
  ButtonModule,
  InputTextModule,
  TabViewModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeModules
  ],
  exports:[...primeModules]
})
export class PrimengModule { }
