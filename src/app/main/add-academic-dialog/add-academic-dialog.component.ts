import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-academic-dialog',
  templateUrl: './add-academic-dialog.component.html',
  styleUrl: './add-academic-dialog.component.scss'
})
export class AddAcademicDialogComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAcademicDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      academics: this.fb.array([this.createItem()])
    });
  }

  get academics(): FormArray {
    return this.form.get('academics') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      marks: ['', Validators.required],
      attendance: ['', Validators.required],
      terms: ['', Validators.required]
    });
  }

  addItem(): void {
    this.academics.push(this.createItem());
  }

  removeItem(index: number): void {
    this.academics.removeAt(index);
  }

  submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
