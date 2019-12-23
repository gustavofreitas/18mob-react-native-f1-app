import React, { Component } from 'react';
import { Button, View, Text, ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import fonts from '../../fonts';
(fonts());

import Seasons from './components/seasons';

const fullWidth = '100%';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: fullWidth
  },
  title: {
    width: fullWidth,
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10
  },
  subTitle: {
    width: fullWidth,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10,
    marginBottom: 25
  }
});

class HomeScreen extends Component {
    constructor(props){
      super(props);

      this.getData = this.getData.bind(this);
    }

    getData(year){
      console.log("CALLED ====>", year);

      this.props.navigation.navigate('Category', { season: year });
    }

    render() {
      return (
        <View style={ styles.container }>
          <ScrollView>
            <Text style={ styles.title }>
              Temporadas da F1
            </Text>
            <Text style={ styles.subTitle }>
              Selecione a temporada para continuar...
            </Text>

            <Seasons handleSeason={ this.getData } />
          </ScrollView>
        </View>
      );
    }
  }

  export default withNavigation(HomeScreen);