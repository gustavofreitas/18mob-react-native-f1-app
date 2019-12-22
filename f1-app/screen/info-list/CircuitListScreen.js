import React from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class CircuitListScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Circuit List</Text>
          <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.push('Detail')}
        />
        </View>
      );
    }
  }

export default withNavigation(CircuitListScreen);
