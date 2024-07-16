import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children-profile-form',
  templateUrl: './children-profile-form.component.html',
  styleUrl: './children-profile-form.component.scss'
})
export class ChildrenProfileFormComponent {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [''],
      religion: [''],
      denomination: [''],
      baptismDate: [''],
      holySpiritDate: [''],
      doa: [''],
      standard: [''],
      medium: [''],
      admissionNumber: [''],
      location: [''],
      address: [''],
      studentMobile1: [''],
      studentMobile2: [''],
      fatherName: [''],
      fatherReligion: [''],
      fatherDenomination: [''],
      fatherBaptismDate: [''],
      fatherHolySpiritDate: [''],
      fatherMobileNumber: [''],
      motherName: [''],
      motherReligion: [''],
      motherDenomination: [''],
      motherBaptismDate: [''],
      motherHolySpiritDate: [''],
      motherMobileNumber: ['']
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Implement logic to save the form data
    }
  }
}
