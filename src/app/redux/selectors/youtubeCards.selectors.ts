import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IVideoItem } from '../../youtube/models/video-item.model'

export const selectYoutubeCardsFeature = createFeatureSelector<{ videos: IVideoItem[] }>('youtubeCards')
export const selectYoutubeCards = createSelector(
  selectYoutubeCardsFeature,
  (youtubeCards) => youtubeCards.videos,
)
