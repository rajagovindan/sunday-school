import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add-academic-dialog',
  templateUrl: './add-academic-dialog.component.html',
  styleUrl: './add-academic-dialog.component.scss'
})
export class AddAcademicDialogComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,public _service: MainService,
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
      mark: ['', Validators.required],
      attendance: ['', Validators.required],
      term: ['', Validators.required]
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
      let payload=this.form.value.academics
      this._service.addAcademics(payload,1).subscribe((res: any) => {
      });
      console.log("payload", payload)
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
