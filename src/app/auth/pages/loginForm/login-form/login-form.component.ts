import { Component } from '@angular/core'
import {
  FormBuilder, Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { ILogin, LoginService } from '../../../services/login/login.service'

const passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[\\]:;<>,.?~_+\\-=|\\\\/"\']).{8,}$'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form = this.fb.group({
    login: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
  })

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
  }

  onSubmit() {
    this.form.value.login = this.form.value.login?.trim()
    this.form.value.password = this.form.value.password?.trim()
    this.loginService.login(<ILogin> this.form.value)
    this.router.navigate(['/youtube'])
  }

  get login() {
    return this.form.get('login')
  }

  get password() {
    return this.form.get('password')
  }
}
