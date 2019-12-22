import React from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class CategoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Category Screen</Text>
          <Button
          title="Go to Circuit List"
          onPress={() => this.props.navigation.push('CircuitList')}
        />
        <Button
          title="Go to Race List"
          onPress={() => this.props.navigation.push('RaceList')}
        />
        <Button
          title="Go to Racers List"
          onPress={() => this.props.navigation.push('RacerList')}
        />
        </View>
      );
    }
  }

  export default withNavigation(CategoryScreen);