import React from 'react';
import { Button, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Category"
          onPress={() => this.props.navigation.push('Category')}
        />
        </View>
      );
    }
  }

  export default withNavigation(HomeScreen);