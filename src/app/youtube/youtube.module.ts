import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YoutubeRoutingModule } from './youtube-routing.module'
import { MainComponent } from './pages/main/main.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { SearchItemComponent } from './components/search-item/search-item.component'
import { BorderBottomColorDirective } from './directives/border-bottom-color/border-bottom-color.directive'
import { FilterPipe } from './pipes/filter/filter.pipe'
import { SortPipe } from './pipes/sort/sort.pipe'
import { MaterialModule } from '../material/material.module'
import {
  DetailedInformationComponent,
} from './pages/detailed-information/detailed-information/detailed-information.component'

@NgModule({
  declarations: [
    MainComponent,
    SearchResultsComponent,
    SearchItemComponent,
    BorderBottomColorDirective,
    FilterPipe,
    SortPipe,
    DetailedInformationComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    MaterialModule,
  ],

})
export class YoutubeModule {
}
