import { TThumbnailsItem } from './thumbnails-item.model'

export interface IVideoItem {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: TThumbnailsItem,
      medium: TThumbnailsItem,
      high: TThumbnailsItem,
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    favoriteCount: string,
    commentCount: string,
  }
}
