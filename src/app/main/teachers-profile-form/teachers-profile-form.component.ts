import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-teachers-profile-form',
  templateUrl: './teachers-profile-form.component.html',
  styleUrl: './teachers-profile-form.component.scss'
})
export class TeachersProfileFormComponent {
  teachersForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.teachersForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      standard: ['', Validators.required],
      medium: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      altmobilenumber: [''],
    });
  }
  onSubmit(): void {
    if (this.teachersForm.valid) {
      console.log(this.teachersForm.value);
      // Implement logic to save the form data
    } else {
      this.teachersForm.markAllAsTouched();
      console.log(this.teachersForm.value);
    }
  }
}
