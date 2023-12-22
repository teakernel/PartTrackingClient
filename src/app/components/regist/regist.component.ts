import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alter.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.css'
})
export class RegistComponent implements OnInit {

  form!: FormGroup;

  error?: string;
  loading = false;
  submitted = false;

  user: User = {
    name: '',
    email: '',
    tel: '',
    description: '',
    password: '',
  };

  constructor(
    private userService: UserService,
    private atertService: AlertService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      description: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.form.controls; }

  // newUser(): void {
  //   const data = {
  //     name: this.user.name,
  //     telephone: this.user.tel,
  //     email: this.user.email,
  //     description: this.user.description,
  //     passsword: this.user.password
  //   };

  //   this.userService.create(data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.submitted = true;
  //     },
  //     error: (e) => console.error(e)
  //   });
  // }

  onSubmit() {
    this.submitted = true;

    this.atertService.clear();

    this.error = '';

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.atertService.success('Sign up successful.');
          this.router.navigate(['/users/login'], { queryParams: { registered: true } });
        },
        error: error => {
          this.atertService.error(error);
          this.loading = false;
        }
      });
  }

}
