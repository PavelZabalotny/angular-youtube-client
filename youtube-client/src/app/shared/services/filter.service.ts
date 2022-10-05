import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _value: string = ''

  public get value() {
    return this._value
  }

  public set value(value: string) {
    if (value !== this._value) {
      this._value = value
    }
  }
}
