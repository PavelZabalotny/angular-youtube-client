import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable()
export class YoutubeTokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url } = request
    const token = `&key=${environment.YOUTUBE_API_KEY}`
    const newRequest = request.clone({ url: url + token })
    return next.handle(newRequest)
  }
}
