import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children-academic-form',
  templateUrl: './children-academic-form.component.html',
  styleUrl: './children-academic-form.component.scss'
})
export class ChildrenAcademicFormComponent {
    studentsacademicForm!: FormGroup;
    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
      this.studentsacademicForm = this.fb.group({
        name: ['', Validators.required],
        attendence: ['', Validators.required],
        admissionNumber: ['', Validators.required],
       
      });
    }
    onSubmit(): void {
      if (this.studentsacademicForm.valid) {
        console.log(this.studentsacademicForm.value);
        // Implement logic to save the form data
      } else {
        this.studentsacademicForm.markAllAsTouched();
        console.log(this.studentsacademicForm.value);
      }
    }
  }
