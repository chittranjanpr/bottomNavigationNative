import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import HistoryScreen from '../HistoryScreen';
import ListScreen from '../ListScreen';

const HomeScreen = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'All', icon: 'queue-music' },
    { key: 'history', title: 'History', icon: 'album' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    all: () => ListScreen(props),
    history: () => HistoryScreen(props),
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeScreen;