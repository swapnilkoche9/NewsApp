import moment from 'moment';
import { FeedItem, Feed } from '../dtos/feeds';
import { formatDate } from './utils';

export const sortedFeedsByDate = (feedItems: FeedItem[]): FeedItem[] => {
  return feedItems.sort((item1: FeedItem, item2: FeedItem) =>
    moment.utc(item2.pubDate).diff(moment.utc(item1.pubDate)),
  );
};

export const generateFeedDetailsHtml = (item: FeedItem): string => {
  const title = `<div style="margin:20px;"><h1 style="font-size:60px;">${item.title}</h1>`;
  const date = `<p style="font-size:30px;">${
    item.pubDate && formatDate(item.pubDate, 'DD.MM.YYYY')
  }</p>`;
  const description = `<p style="font-size:40px;">${item.description}</p>`;
  const html = `${title}${date}${description}`;

  return html;
};

export const buildFavoriteFeeds = (
  feeds: Feed[],
  fevoriteFeedIds: string[],
): FeedItem[] => {
  const filteredFeeds = feeds
    .map(feed => feed.items)
    .flat()
    .filter(item => fevoriteFeedIds.includes(item.id));

  return filteredFeeds;
};
