import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { LoginService } from '../../../auth/services/login/login.service'

@Injectable({
  providedIn: 'root',
})
export class YoutubeGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) {
  }
  canActivate(): boolean | Promise<boolean> {
    // return this.login.isLoggedIn()
    return this.login.isLoggedIn() ? true : this.router.navigate(['/login'])
  }
}
