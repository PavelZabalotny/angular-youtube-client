import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IVideoItem } from '../../youtube/models/video-item.model'

export const selectCustomCardsFeature = createFeatureSelector<{ cards: IVideoItem[] }>('customCards')
export const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (customCards) => {
    return customCards.cards
  },
)
