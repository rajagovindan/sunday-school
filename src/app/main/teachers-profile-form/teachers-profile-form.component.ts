import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';
@Component({
  selector: 'app-teachers-profile-form',
  templateUrl: './teachers-profile-form.component.html',
  styleUrl: './teachers-profile-form.component.scss'
})
export class TeachersProfileFormComponent {
  teachersForm!: FormGroup;
  constructor(private fb: FormBuilder, public _service: MainService) { }
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
      let payload = {
        "name": this.teachersForm.value.name,
        "age": this.teachersForm.value.age,
        "primaryContactNumber": this.teachersForm.value.primaryContactNumber,
        "medium": this.teachersForm.value.medium,
        "denomination": this.teachersForm.value.denomination,
        "standard": this.teachersForm.value.standard,
        "location": this.teachersForm.value.location,
        "fullAddress": this.teachersForm.value.address,
      }
      this._service.addTeachers(payload).subscribe((res: any) => {
      });
    } else {
      this.teachersForm.markAllAsTouched();
      console.log(this.teachersForm.value);
    }
  }
}
