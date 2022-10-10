import { Pipe, PipeTransform } from '@angular/core'
import { ISearchItem } from '../../search/search-item.model'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: ISearchItem[], filterValue?: string): ISearchItem[] {
    if (!filterValue) {
      return items
    }
    let newItems: ISearchItem[] = []

    if (filterValue) {
      newItems = this.filter(items, filterValue)
    }

    return newItems
  }

  filter(items: ISearchItem[], filterValue: string) {
    return items.filter((item) => item.snippet.title.toLowerCase().includes(filterValue))
  }
}
