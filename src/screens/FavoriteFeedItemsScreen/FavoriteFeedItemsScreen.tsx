import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import { useFeeds } from '../../provider/FeedsProvider';
import { buildFavoriteFeeds } from '../../utils/feedUtil';
import { FeedItem } from '../../dtos/feeds';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e0ebeb',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  listHeader: {
    fontSize: 25,
  },

  title: {
    marginBottom: 5,
    fontSize: 18,
  },
  ListEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FavoriteFeedItemsScreen = () => {
  const { fevoriteFeedIds, feeds } = useFeeds();

  const renderItem = ({ item }: { item: FeedItem }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const ListEmptyComponent = (
    <View style={styles.ListEmptyComponent}>
      <Text>No Favorite Feed Items</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={buildFavoriteFeeds(feeds, fevoriteFeedIds)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>Favorite Feeds</Text>
          </View>
        }
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default FavoriteFeedItemsScreen;
