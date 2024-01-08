// import { Component, OnInit } from '@angular/core';
// import { User } from '../../models/user';
// import { UserService } from '../../services/user.service';
// import { FormGroup, Validators, ReactiveFormsModule, AbstractControl, FormControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs/operators';
// import { AlertService } from '../../services/alter.service';

// @Component({
//   selector: 'app-regist',
//   templateUrl: './regist.component.html',
//   styleUrl: './regist.component.css'
// })
// export class RegistComponent {

//   registerForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     email: new FormControl('', Validators.required),
//     telephone: new FormControl('', Validators.required),
//     description: new FormControl(),
//     password: new FormControl('', Validators.minLength(6))
//   });

//   error?: string;
//   loading = false;
//   submitted = false;

//   constructor(
//     private userService: UserService,
//     private alertService: AlertService,
//     private route: ActivatedRoute,
//     private router: Router) {

//   }

//   get f() { return this.registerForm.controls; }

//   registerUser(): void {
//     const data = {
//       name: this.registerForm.get('name')?.value,
//       telephone: this.registerForm.get('telephone')?.value,
//       email: this.registerForm.get('email')?.value,
//       description: this.registerForm.get('description')?.value,
//       passsword: this.registerForm.get('password')?.value
//     };

//     this.userService.register(data).subscribe({
//       next: (res) => {
//         console.log(res);
//         this.submitted = true;

//         this.alertService.success('Registration successful', true);
//         this.router.navigate(['/users/login'], { queryParams: { registered: true }});
//       },
//       error: (e) => console.error(e)
//     });
//   }

// }

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService) { }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.userService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
