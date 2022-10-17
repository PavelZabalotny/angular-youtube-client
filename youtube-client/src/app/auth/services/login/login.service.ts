import { Injectable } from '@angular/core'

const token = 'auth_token'

export interface ILogin {
  login: string,
  password: string,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login({ login, password }: ILogin) {
    localStorage.setItem(token, `${login}.${password}`)
  }

  logout() {
    localStorage.removeItem(token)
  }

  isLoggedIn() {
    return !!localStorage.getItem(token)
  }
}
