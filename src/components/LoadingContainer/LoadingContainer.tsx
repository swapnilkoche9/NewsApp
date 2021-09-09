import React, { FC } from 'react';
import { View, ActivityIndicator } from 'react-native';

interface Props {
  isLoading: boolean;
}

const LoadingContainer: FC<Props> = ({ children, isLoading }) => {
  if (isLoading) return <ActivityIndicator size="large" color="gray" />;

  return <View>{children}</View>;
};

export default LoadingContainer;
