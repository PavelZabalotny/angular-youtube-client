import { createSelector } from '@ngrx/store'
import { selectCustomCardsFeature } from './customCards.selector'
import { selectYoutubeCardsFeature } from './youtubeCards.selectors'

export const selectStore = createSelector(
  selectYoutubeCardsFeature,
  selectCustomCardsFeature,
  ({ videos }, { cards }) => {
    return [...videos, ...cards]
  },
)
