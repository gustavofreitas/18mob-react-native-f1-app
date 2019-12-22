import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation, ThemeColors } from 'react-navigation';

class CategoryScreen extends Component {

  state = {
    season: 0
  }

  componentDidMount(){
    const season = this.props.navigation.getParam('season');

    this.setState({ season: season});
  }

  render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Temporada { this.state.season }</Text>

          <Text>Category Screen</Text>
          <Button
          title="Go to Circuit List"
          onPress={() => this.props.navigation.push('CircuitList')}
        />
        <Button
          title="Go to Race List"
          onPress={() => this.props.navigation.push('RaceList', { season: this.state.season })}
        />
        <Button
          title="Go to Racers List"
          onPress={() => this.props.navigation.push('RacerList', { season: this.state.season})}
        />
        </View>
      );
    }
  }

  export default withNavigation(CategoryScreen);