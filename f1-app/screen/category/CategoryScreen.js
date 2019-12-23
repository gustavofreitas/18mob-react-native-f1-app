import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { withNavigation, ThemeColors } from 'react-navigation';

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    textAlign: "center",
    margin: 10
  },
  subTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10,
    marginBottom: 25
  },
  buttonText: {
    width: '100%',
    textAlign: "center",
    fontSize: 26,
    fontWeight: "300",
    color: '#f3f3f3'
  },
  button: {
    width: 300,
    height: 50,
    textAlign: "center",
    margin: 20,
    backgroundColor: '#333'
  }
})

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
          <Text style={ styles.title }>Temporada { this.state.season }</Text>
          <Text style={ styles.subTitle}>O que deseja saber?</Text>
          <Button
            style={ styles.button }
            onPress={() => this.props.navigation.push('ConstructorList', { season: this.state.season })}
          >
            <Text style={ styles.buttonText }>Escuderias</Text>
          </Button>
          <Button
            style={ styles.button }
            onPress={() => this.props.navigation.push('RaceList', { season: this.state.season })}
          >
            <Text style={ styles.buttonText }>Corridas</Text>
          </Button> 
          <Button
            style={ styles.button }
            onPress={() => this.props.navigation.push('DriverList', { season: this.state.season})}
          >
            <Text style={ styles.buttonText }>Pilotos</Text>
          </Button>
        </View>
      );
    }
  }

  export default withNavigation(CategoryScreen);