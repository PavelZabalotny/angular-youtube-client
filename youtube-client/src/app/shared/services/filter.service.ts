import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterValue: string = ''

  setFilterValue(value: string) {
    if (value !== this.filterValue) {
      this.filterValue = value
    }
  }
}
