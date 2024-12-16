import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,public _service: MainService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("login", this.loginForm.value)

      this._service.dashboardCount(this.loginForm.value).subscribe((res: any) => {
        this.router.navigate(['/dashboard']);
     }
      );
      // Handle login logic here
    } else {
      // Validate and show error messages if needed
      this.loginForm.markAllAsTouched();
    }
  }
}
