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
      baptismDate: [''],
      holySpiritDate: [''],
      admissionDate: ['', Validators.required],
      standard: ['', Validators.required],
      medium: ['', Validators.required],
      admissionNumber: ['', Validators.required],
      location: ['', Validators.required],
      fullAddress: ['', Validators.required],
      primaryContactNumber: ['', Validators.required],
      academicYear: ['', Validators.required],
      secondaryContactNumber: [''],
      father: this.fb.group({
        name: ['', Validators.required],
        religion: ['', Validators.required],
        denomination: ['', Validators.required],
        baptismDate: [''],
        holySpiritDate: [''],
        mobileNumber: ['', Validators.required]
      }),
      mother: this.fb.group({
        name: ['', Validators.required],
        religion: ['', Validators.required],
        denomination: ['', Validators.required],
        baptismDate: [''],
        holySpiritDate: [''],
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
"academicYear": this.studentForm.value.academicYear,
      "gender": this.studentForm.value.gender,
      "primaryContactNumber": this.studentForm.value.primaryContactNumber,
      "secondaryContactNumber": this.studentForm.value.secondaryContactNumber,
      "admissionDate": this.studentForm.value.admissionDate ? this.studentForm.value.admissionDate : null,
      "dob": this.studentForm.value.dob ? this.studentForm.value.dob : null,
      "religion": this.studentForm.value.religion,
      "denomination": this.studentForm.value.denomination,
      "baptismDate": this.studentForm.value.baptismDate
        ? this.studentForm.value.baptismDate
         : null,
      "holySpiritDate": this.studentForm.value.holySpiritDate ? this.studentForm.value.holySpiritDate: null,
      "standard": this.studentForm.value.standard,
      "location": this.studentForm.value.location,
      "fullAddress": this.studentForm.value.address,

      "mothersDetails": {
      "name": this.studentForm.value.mother.name,
        "religion": this.studentForm.value.mother.religion,
        "baptismDate": this.studentForm.value.mother.baptismDate ? this.studentForm.value.
          mother.baptismDate : null,
        "holySpiritDate": this.studentForm.value.mother.holySpiritDate ? 
        this.studentForm.value.mother.holySpiritDate : null,
        "primaryContactNumber": this.studentForm.value.mother.mobileNumber,
        "denomination": this.studentForm.value.mother.denomination
      },
      "fathersDetails": {
        "name": this.studentForm.value.father.name,
        "religion": this.studentForm.value.father.religion,
        "baptismDate": this.studentForm.value.father.baptismDate ? this.studentForm.value.
          father.baptismDate : null,
        "holySpiritDate": this.studentForm.value.father.holySpiritDate ? 
        this.studentForm.value.father.holySpiritDate : null,
        "primaryContactNumber": this.studentForm.value.father.mobileNumber,
        "denomination": this.studentForm.value.father.denomination
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
