import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screen/home/HomeScreen';
import DetailScreen from './screen/detail/DetailScreen';
import CategoryScreen from './screen/category/CategoryScreen';
import CircuitListScreen from './screen/info-list/CircuitListScreen';
import RaceListScreen from './screen/info-list/RaceListScreen';
import RacerListScreen from './screen/info-list/RacerListScreen';



const AppNavigator = createStackNavigator({
  Home: () => <HomeScreen />,
  Category: () => <CategoryScreen />,
  CircuitList: () => <CircuitListScreen />,
  RaceList: () => <RaceListScreen />,
  RacerList: () => <RacerListScreen />,
  Detail: () => <DetailScreen />
},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
