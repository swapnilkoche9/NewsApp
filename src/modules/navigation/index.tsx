import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';
import WebViewDetailsScreen from '../../screens/WebViewDetailsScreen/WebViewDetailsScreen';
import FavoriteFeedItemsScreen from '../../screens/FavoriteFeedItemsScreen/FavoriteFeedItemsScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

const RootStackScreen = () => (
  <Stack.Navigator initialRouteName={'Home'}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Feeds List' }}
    />
    <Stack.Screen
      name="Details"
      options={{ title: 'Feed Details' }}
      component={DetailsScreen}
    />
    <Stack.Screen
      name="DeatilsWebView"
      options={{ title: 'Feed Details' }}
      component={WebViewDetailsScreen}
    />
    <Stack.Screen
      name="FavoriteItems"
      options={{ title: 'Favorite Feed Items' }}
      component={FavoriteFeedItemsScreen}
    />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={'Stack'} component={RootStackScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
