import React from 'react';
import { WebView } from 'react-native-webview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FeedItem } from '../../dtos/feeds';
import { generateFeedDetailsHtml } from '../../utils/feedUtil';

type RootStackParamList = {
  DeatilsWebView: { feedItem: FeedItem };
};
type Props = NativeStackScreenProps<RootStackParamList, 'DeatilsWebView'>;

const WebViewDetailsScreen = ({ route }: Props) => {
  const { feedItem } = route.params;

  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html: generateFeedDetailsHtml(feedItem),
      }}
      startInLoadingState
      scalesPageToFit
      javaScriptEnabled
      style={{ flex: 1 }}
    />
  );
};

export default WebViewDetailsScreen;
