import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Driver from './components/driver'

class DetailsScreen extends React.Component {

  state = {
    driver: {}}

  componentDidMount() {
    const driver = this.props.navigation.getParam('driver');
    this.setState({ driver: driver});
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Driver driver={this.state.driver} />
        </View>
        
      );
    }
  }

  export default withNavigation(DetailsScreen)
