import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import { Feed, FeedItem } from '../../dtos/feeds';
import { sortedFeedsByDate } from '../../utils/feedUtil';
import FavIcon from '../../resources/images/FevIcon';
import { useFeeds } from '../../provider/FeedsProvider';
import { formatDate } from '../../utils/utils';

type RootStackParamList = {
  Details: { selectedFeed: Feed };
};
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#e0ebeb',
    padding: 20,
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
  feedItem: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    marginBottom: 5,
    fontSize: 20,
  },
  publishDate: {
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
  },
});

const DetailsScreen = ({ route }: Props) => {
  const { selectedFeed } = route.params;
  const { fevoriteFeedIds, addTofavorite } = useFeeds();
  const { navigate } = useNavigation();

  const renderItem = ({ item }: { item: FeedItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigate('DeatilsWebView', { feedItem: item })}>
      <View style={styles.itemContainer}>
        <View style={styles.feedItem}>
          <Text style={styles.name}>{item.title}</Text>
          <Text style={styles.publishDate}>
            {item.pubDate && formatDate(item.pubDate, 'DD.MM.YYYY')}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Pressable onPress={() => addTofavorite(item.id)}>
          <FavIcon
            color={fevoriteFeedIds.includes(item.id) ? '#66a3ff' : 'white'}
          />
        </Pressable>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={sortedFeedsByDate(selectedFeed.items ?? [])}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>
              {selectedFeed.name} ({selectedFeed?.items?.length})
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
