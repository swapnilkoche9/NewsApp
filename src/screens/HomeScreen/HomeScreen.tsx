import React, { FC } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useFeeds } from '../../provider/FeedsProvider';
import { Feed } from '../../dtos/feeds';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

const styles = StyleSheet.create({
  listConatiner: {
    marginHorizontal: 15,
  },
  feedItemContainer: {
    backgroundColor: '#f9c2ff',
    padding: 7,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
  },
  ListEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showFavoriteButton: {
    marginTop: 30,
    backgroundColor: '#b5e7a0',
    padding: 5,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

const HomeScreen: FC = () => {
  const { navigate } = useNavigation();
  const { feeds, isLoading } = useFeeds();

  const renderItem = ({ item }: { item: Feed }) => (
    <TouchableOpacity
      onPress={() => navigate('Details', { selectedFeed: item })}
      style={styles.feedItemContainer}>
      <View style={styles.feedItem}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const ListHeaderComponent = (
    <View style={styles.listHeaderContainer}>
      <Text style={styles.listHeader}>RSS Feeds</Text>
    </View>
  );

  const ListEmptyComponent = (
    <View style={styles.ListEmptyComponent}>
      <Text>No RSS feeds available</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <LoadingContainer isLoading={isLoading}>
        <FlatList
          data={feeds}
          style={styles.listConatiner}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={ListHeaderComponent}
          ListEmptyComponent={ListEmptyComponent}
        />
        <Pressable
          style={styles.showFavoriteButton}
          onPress={() => navigate('FavoriteItems')}>
          <Text>Show favorites</Text>
        </Pressable>
      </LoadingContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;
