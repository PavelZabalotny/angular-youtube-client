import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginFormComponent } from './pages/loginForm/login-form/login-form.component'
import { MaterialModule } from '../material/material.module'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginFormComponent,
  ],
})
export class AuthModule {
}
