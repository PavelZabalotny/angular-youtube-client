import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'

const token = 'auth_token'

export interface ILogin {
  login: string,
  password: string,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLog = new BehaviorSubject<boolean>(this.isLoggedIn())

  constructor(private router: Router) {
  }

  login({ login, password }: ILogin): void {
    localStorage.setItem(token, `${login}.${password}`)
    this.isLog.next(true)
  }

  logout(): void {
    localStorage.removeItem(token)
    this.isLog.next(false)
    this.router.navigate(['/'])
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(token)
  }
}
