import React, { FC, useContext, useState, useEffect } from 'react';

import { getAllFeeds } from '../modules/api/feeds';
import { Feed } from '../dtos/feeds';

interface FeedsContextInterface {
  feeds: Feed[];
  isLoading: boolean;
  fevoriteFeedIds: string[];
  addTofavorite: (id: string) => void;
}

const feedsContext = React.createContext<FeedsContextInterface | null>(null);

const FeedsProvider: FC = ({ children }) => {
  const [feeds, setFeeds] = useState<Feed[] | []>([]);
  const [fevoriteFeedIds, setFevouriteFeedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const feeds = await getAllFeeds();
      setFeeds(feeds);
      setLoading(false);
    })();
  }, []);

  const addTofavorite = (feedId: string) => {
    if (fevoriteFeedIds.includes(feedId)) {
      const filteredFeedIds = fevoriteFeedIds.filter(id => id != feedId);
      setFevouriteFeedIds(filteredFeedIds);
    } else {
      setFevouriteFeedIds((ids: string[]) => [...ids, feedId]);
    }
  };

  return (
    <feedsContext.Provider
      value={{
        feeds: feeds,
        isLoading: loading,
        fevoriteFeedIds,
        addTofavorite,
      }}>
      {children}
    </feedsContext.Provider>
  );
};

export default FeedsProvider;

export const useFeeds = () => {
  const context = useContext(feedsContext);
  return context as FeedsContextInterface;
};
