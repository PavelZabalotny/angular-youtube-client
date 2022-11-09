import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/components/header/header.component'
import { SearchInputComponent } from './core/components/search-input/search-input.component'
import { FilterComponent } from './core/components/filter/filter.component'
import { MaterialModule } from './material/material.module'
import { LoginComponent } from './core/components/login/login.component'
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component'
import { AuthModule } from './auth/auth.module'
import { CreateCardComponent } from './core/pages/admin/create-card/create-card.component'
import { YoutubeTokenInterceptor } from './shared/interceptors/youtube-token/youtube-token.interceptor'
import { YoutubeEffects } from './redux/effects/youtube.effects'
import { youtubeCardsReducer } from './redux/reducers/youtubeCards.reducer'
import { customCardsReducer } from './redux/reducers/customCard.reducer'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    FilterComponent,
    LoginComponent,
    PageNotFoundComponent,
    CreateCardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      youtubeCards: youtubeCardsReducer,
      customCards: customCardsReducer,
    }, {}),
    EffectsModule.forRoot([YoutubeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
