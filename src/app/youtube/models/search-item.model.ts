import { TThumbnailsItem } from './thumbnails-item.model'

export interface ISearchItem {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: TThumbnailsItem,
      medium: TThumbnailsItem,
      high: TThumbnailsItem,
      standard: TThumbnailsItem,
      maxres: TThumbnailsItem
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage?: string,
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
