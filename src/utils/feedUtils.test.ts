import React from 'react';
import { sortedFeedsByDate, buildFavoriteFeeds } from './feedUtil';

const feeds = {
  id: 'feed1',
  title: 'The Apology Line',
  link: 'https://www.iwonder.com/',
  name: 'The Apology Line',
  description:
    'All episodes are available for free, with ad-free episodes available for Wondery+ subscribers.If you could call a number and say you’re sorry, and no one would know…what would you apologize for? ',
  items: [
    {
      id: 'feed1_2',
      title: ' "Wondery Presents - Dr. Death: Miracle Man"',
      link: 'https://www.iwonder.com/',
      description:
        'Paolo is a smart and handsome surgeon, renowned for his ability to perform surgeries that transform his patients’ lives',
      pubDate: 1612738800000,
      author: 'peter curt',
    },
    {
      id: 'feed1_1',
      title: 'Wondery Presents: SUSPECT',
      link: 'https://www.iwonder.com/',
      description:
        'A big Halloween party at an apartment complex in Redmond, Washington. Themed rooms and costumed partygoers.',
      pubDate: 1628373600000,
      author: 'sam alex',
    },
  ],
};

const sortedFeeds = {
  id: 'feed1',
  title: 'The Apology Line',
  link: 'https://www.iwonder.com/',
  name: 'The Apology Line',
  description:
    'All episodes are available for free, with ad-free episodes available for Wondery+ subscribers.If you could call a number and say you’re sorry, and no one would know…what would you apologize for? ',
  items: [
    {
      id: 'feed1_1',
      title: 'Wondery Presents: SUSPECT',
      link: 'https://www.iwonder.com/',
      description:
        'A big Halloween party at an apartment complex in Redmond, Washington. Themed rooms and costumed partygoers.',
      pubDate: 1628373600000,
      author: 'sam alex',
    },
    {
      id: 'feed1_2',
      title: ' "Wondery Presents - Dr. Death: Miracle Man"',
      link: 'https://www.iwonder.com/',
      description:
        'Paolo is a smart and handsome surgeon, renowned for his ability to perform surgeries that transform his patients’ lives',
      pubDate: 1612738800000,
      author: 'peter curt',
    },
  ],
};

describe('feedUtil tests', () => {
  it('sortedFeedsByDate should sort data based on pubDate', () => {
    const res = sortedFeedsByDate(feeds.items);
    expect(res).toEqual(sortedFeeds.items);
  });

  it('sortedFeedsByDate should return same data if it s already sorted', () => {
    const res = sortedFeedsByDate(sortedFeeds.items);
    expect(res).toEqual(sortedFeeds.items);
  });

  it('buildFavoriteFeeds should return all favorite feeds', () => {
    const res = buildFavoriteFeeds([feeds], ['feed1_2']);
    expect(res[0].id).toEqual('feed1_2');
  });
});
