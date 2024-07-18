import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
@Component({
  selector: 'app-children-profile-form',
  templateUrl: './children-profile-form.component.html',
  styleUrl: './children-profile-form.component.scss'
})
export class ChildrenProfileFormComponent {
  studentForm!: FormGroup;
  constructor(private fb: FormBuilder, public _service: MainService) { }
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      religion: ['', Validators.required],
      denomination: ['', Validators.required],
      baptismDate: ['', Validators.required],
      holySpiritDate: ['', Validators.required],
      admissionDate: ['', Validators.required],
      standard: ['', Validators.required],
      medium: ['', Validators.required],
      admissionNumber: ['', Validators.required],
      location: ['', Validators.required],
      fullAddress: ['', Validators.required],
      primaryContactNumber: ['', Validators.required],
      secondaryContactNumber: [''],
      father: this.fb.group({
        name: ['', Validators.required],
        religion: ['', Validators.required],
        denomination: ['', Validators.required],
        baptismDate: ['', Validators.required],
        holySpiritDate: ['', Validators.required],
        mobileNumber: ['', Validators.required]
      }),
      mother: this.fb.group({
        name: ['', Validators.required],
        religion: ['', Validators.required],
        denomination: ['', Validators.required],
        baptismDate: ['', Validators.required],
        holySpiritDate: ['', Validators.required],
        mobileNumber: ['', Validators.required]
      })
    });
  }
  generateDate(date: any) {
    if (date) {
      let generatedate = new Date(date)

      let month = generatedate.getMonth() + 1;
      let day = generatedate.getDate()
      return generatedate.getFullYear() + '-' + (month > 10 ? `0${month}` : month) + '-' + (day < 10 ? `0${day}` : day);
    }
    return '';
  }
  onSubmit(): void {
     if (this.studentForm.valid) {
    console.log(this.studentForm.value);
    // Implement logic to save the form data
    let payload = {
      "admissionNumber": this.studentForm.value.admissionNumber,
      "name": this.studentForm.value.name,

      "gender": this.studentForm.value.gender,
      "primaryContactNumber": this.studentForm.value.primaryContactNumber,
      "secondaryContactNumber": this.studentForm.value.secondaryContactNumber,
      "admissionDate": this.studentForm.value.admissionDate ? this.generateDate(this.studentForm.value.admissionDate) : null,
      "dob": this.studentForm.value.dob ? this.generateDate(this.studentForm.value.dob) : null,
      "religion": this.studentForm.value.religion,
      "denomination": this.studentForm.value.denomination,
      "baptismDate": this.studentForm.value.baptismDate
        ? this.generateDate(this.studentForm.value.baptismDate
        ) : null,
      "holySpiritDate": this.studentForm.value.holySpiritDate ? this.generateDate(this.studentForm.value.holySpiritDate) : null,
      "standard": this.studentForm.value.standard,
      "location": this.studentForm.value.location,
      "fullAddress": this.studentForm.value.address,

      "mothersDetails": {
        "name": this.studentForm.value.motherName,
        "religion": this.studentForm.value.motherReligion,
        "baptismDate": this.studentForm.value.motherBaptismDate ? this.generateDate(this.studentForm.value.motherBaptismDate) : null,
        "holySpiritDate": this.studentForm.value.motherHolySpiritDate ? this.generateDate(this.studentForm.value.motherHolySpiritDate) : null,
        "primaryContactNumber": this.studentForm.value.motherMobileNumber,
        "denomination": this.studentForm.value.motherDenomination
      },
      "fathersDetails": {
        "name": this.studentForm.value.fatherName,
        "religion": this.studentForm.value.fatherReligion,
        "baptismDate": this.studentForm.value.fatherBaptismDate ? this.generateDate(this.studentForm.value.fatherBaptismDate) : null,
        "holySpiritDate": this.studentForm.value.fatherHolySpiritDate ? this.generateDate(this.studentForm.value.fatherHolySpiritDate) : null,
        "primaryContactNumber": this.studentForm.value.fatherMobileNumber,
        "denomination": this.studentForm.value.fatherDenomination
      }
    }
    console.log("payload", payload),
      this._service.addStudent(payload).subscribe((res: any) => {
      });
    }
     else {
      this.studentForm.markAllAsTouched();
      console.log(this.studentForm.value);
    }
  }
}
