import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../../auth/services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn!: boolean

  constructor(private login: LoginService) {
  }

  ngOnInit() {
    this.login.isLog.subscribe((isLog) => {
      this.isLoggedIn = isLog
    })
  }

  buttonText(): string {
    return this.isLoggedIn ? 'Logout' : 'Login'
  }

  onButtonClick(): void {
    if (this.isLoggedIn) {
      this.login.logout()
    }
  }
}
