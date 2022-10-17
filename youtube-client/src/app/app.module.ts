import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/components/header/header.component'
import { SearchInputComponent } from './core/components/search-input/search-input.component'
import { FilterComponent } from './core/components/filter/filter.component'
import { MaterialModule } from './material/material.module'
import { LoginComponent } from './core/components/login/login.component'
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component'
import { AuthModule } from './auth/auth.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    FilterComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
