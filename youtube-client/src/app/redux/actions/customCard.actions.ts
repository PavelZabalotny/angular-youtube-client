import { createAction, props } from '@ngrx/store'
import { IVideoItem } from '../../youtube/models/video-item.model'

export interface ICustomCard {
  title: string,
  description?: string,
  imageUrl: string,
  videoUrl: string,
  publishedAt: string
}

export const postCustomCard = createAction(
  '[CustomCard] Post Custom Card',
  props<{ card: IVideoItem }>(),
)
