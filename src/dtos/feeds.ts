export interface Feed {
  id: string;
  title?: string;
  link?: string;
  name: string;
  description?: string;
  items: FeedItem[];
}

export interface FeedItem {
  id: string;
  title: string;
  link?: string;
  description?: string;
  pubDate?: number;
  author?: string;
}
