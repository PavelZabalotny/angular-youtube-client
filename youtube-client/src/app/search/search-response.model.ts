type TThumbnailsItems = {
  url: string,
  width: number,
  height: number,
}

export interface ISearchResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: [
    {
      kind: string,
      etag: string,
      id: string,
      snippet: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
          default: TThumbnailsItems,
          medium: TThumbnailsItems,
          high: TThumbnailsItems,
          standard: TThumbnailsItems,
          maxres: TThumbnailsItems
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
        dislikeCount: string,
        favoriteCount: string,
        commentCount: string,
      }
    }
  ]
}
