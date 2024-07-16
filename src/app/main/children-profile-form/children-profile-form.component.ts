import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children-profile-form',
  templateUrl: './children-profile-form.component.html',
  styleUrl: './children-profile-form.component.scss'
})
export class ChildrenProfileFormComponent {
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      religion: ['', Validators.required],
      denomination: ['', Validators.required],
      baptismDate: ['', Validators.required],
      holySpiritDate: ['', Validators.required],
      doa: ['', Validators.required],
      standard: ['', Validators.required],
      medium: ['', Validators.required],
      admissionNumber: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required],
      studentMobile1: ['', Validators.required],
      studentMobile2: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherReligion: ['', Validators.required],
      fatherDenomination: ['', Validators.required],
      fatherBaptismDate: ['', Validators.required],
      fatherHolySpiritDate: ['', Validators.required],
      fatherMobileNumber: ['', Validators.required],
      motherName: ['', Validators.required],
      motherReligion: ['', Validators.required],
      motherDenomination: ['', Validators.required],
      motherBaptismDate: ['', Validators.required],
      motherHolySpiritDate: ['', Validators.required],
      motherMobileNumber: ['', Validators.required]
    });
    
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      // Implement logic to save the form data
    } else {
      this.studentForm.markAllAsTouched();
      console.log(this.studentForm.value);
    }
  }
}
