import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { SearchResultsComponent } from './search/search-results/search-results.component'
import { SearchItemComponent } from './search/search-item/search-item.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SearchInputComponent } from './header/search-input/search-input.component'
import { FilterComponent } from './header/filter/filter.component'
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './material/material.module'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './header/login/login.component'
import { BorderBottomColorDirective } from './shared/directive/border-bottom-color/border-bottom-color.directive'
import { FilterPipe } from './shared/pipes/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchInputComponent,
    FilterComponent,
    LoginComponent,
    BorderBottomColorDirective,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
