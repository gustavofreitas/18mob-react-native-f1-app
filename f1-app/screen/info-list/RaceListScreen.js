import React from 'react';
import { View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class RaceListScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Race List</Text>
          <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.push('Detail')}
        />
        </View>
      );
    }
  }

export default withNavigation(RaceListScreen);
