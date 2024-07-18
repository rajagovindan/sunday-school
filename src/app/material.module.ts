import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Requi
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import {MatExpansionModule} from '@angular/material/expansion';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatDividerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatExpansionModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],exports: [...materialModules]
})
export class MaterialModule { }
