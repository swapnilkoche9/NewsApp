import React, { FC } from 'react';

import RootNavigator from './modules/navigation';
import FeedsProvider from './provider/FeedsProvider';

const App: FC = () => {
  return (
    <FeedsProvider>
      <RootNavigator />
    </FeedsProvider>
  );
};

export default App;
