import { Injectable } from '@angular/core'

const token = 'auth_token'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(login: string, password: string) {
    localStorage.setItem(token, `${login}.${password}`)
  }

  logout() {
    localStorage.removeItem(token)
  }

  isLogin() {
    return localStorage.getItem(token)
  }
}
