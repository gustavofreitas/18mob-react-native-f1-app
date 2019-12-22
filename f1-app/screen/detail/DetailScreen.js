import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Driver from './components/driver';
import Race from './components/race';
import Constructor from './components/constructor';

class DetailsScreen extends React.Component {

  state = {
    driver: {},
    race: {},
    constructor: {}
  }

  componentDidMount() {
    const driver = this.props.navigation.getParam('driver');
    const race = this.props.navigation.getParam('race');
    const constructor = this.props.navigation.getParam('team');

    this.setState({ 
      driver: driver,
      race: race,
      constructor: constructor 
    });
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Driver driver={this.state.driver} />
          <Race race={this.state.race} />
          <Constructor constructor={this.state.constructor} />
        </View>
        
      );
    }
  }

  export default withNavigation(DetailsScreen)
