import { Feed } from '../dtos/feeds';

const feedsData = [
  {
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
      {
        id: 'feed1_3',
        title: 'And The Calls Live On | 7',
        link: 'https://www.iwonder.com/',
        description:
          'Marissa talks to long time callers and listeners about the making of Apology Line then and now and what the making of this series has meant to her',
        pubDate: 1625695200000,
        author: 'panakj Borsare',
      },
    ],
  },

  {
    id: 'feed2',
    title: 'The Strawberry Fields  Line',
    link: 'https://www.strawberryfields.com/',
    name: 'The Strawberry Fields  Line',
    description:
      'Allan’s death is like an atomic bomb going off in Marissa’s life. She’s left to make sense of his life, and his life’s work.',

    items: [
      {
        id: 'feed2_1',
        title: 'Mrs. Apology',
        link: 'https://www.strawberryfields.com/',
        description:
          'With Richie gone from his life, Allan must reinvent himself and the Line',
        pubDate: 1628373600000,
        author: 'sam alex',
      },
      {
        id: 'feed2_2',
        title: ' "To Catch A Serial Killer"',
        link: 'https://www.strawberryfields.com/',
        description:
          'Richie is back and Allan is in over his head this time. Help comes in the form of Detective Ray Pierce',
        pubDate: 1612738800000,
        author: 'peter curt',
      },
      {
        id: 'feed2_3',
        title: 'Your Dungeon or Mine?',
        link: 'https://www.strawberryfields.com/',
        description:
          'Richie details his murders and answers Allan’s many questions on the Line. Allan wants to keep Richie talking. He wants to use the Apology Line as a space to reform and study violent criminals',
        pubDate: 1625695200000,
        author: 'panakj Borsare',
      },
    ],
  },
];

export const getAllFeeds = async (): Promise<Feed[]> => {
  //await for the response
  //currently just simulating  delay with setTimeout
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(feedsData);
    }, 500);
  });
};
