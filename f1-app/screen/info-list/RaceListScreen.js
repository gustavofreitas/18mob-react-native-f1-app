import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { List, ListItem } from 'native-base';
import Loading from '../../components/Loading';
import fonts from '../../fonts';
(fonts());

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    margin: 10
  },
  leftColumn: {
    width: '20%',
    fontWeight: "bold",
    textAlign: "center"
  },
  midColumn: {
    width: '50%',
    color: '#333'
  },
  rightColumn: {
    width: '30%',
    textAlign: "right"
  }
});

class RaceListScreen extends Component {
    constructor(props){
      super(props);
      this.getData = this.getData.bind(this);
    }

    state = {
      data: [],
      loading: true,
      season: 0
    }

    componentDidMount(){
      const season = this.props.navigation.getParam('season');
      this.getData(season);
      this.setState({ season: season, loading: true });
    }

    getData(season){
      fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.RaceTable.Races;
        this.setState({ loading: false, data: races });
      })
      .catch(err => console.log(err));

      return this.props.navigation.state.season || "Oi!";
    }

    handleClick(element){
      this.props.navigation.push('Detail', {race: element});
    }

    renderRaces(){
      let result = [];
      if (this.state.data.length){
          this.state.data.forEach(element => {
              result.push(
                  <ListItem key={ `race-${element.round}`} onPress={() => { this.handleClick(element) }}>
                      <Text style={ style.leftColumn  }>
                          {element.round}</Text>
                      
                      <Text style={ style.midColumn }>{element.raceName}</Text>
                      
                      <Text style={ style.rightColumn }>{element.Circuit.Location.country}</Text>
                  </ListItem>
              )
          });
          return result;
      }
      return null;
    }

    renderLoading(){
      return  <View style={ style.container }>
                  <Loading show={ this.state.loading } color="blue" />
              </View>
    }

    render() {
      const results = this.renderRaces();
      return (
          (results && results.length)? 
            <ScrollView>
              <Text style={ style.title }>
                Lista de Corridas da Temporada {this.state.season}
              </Text>
              <List>{results}</List>

              <Button
              title="Go to Detail"
              onPress={() => this.props.navigation.push('Detail')} />
            </ScrollView>
          :this.renderLoading()
      );
    }
  }

export default withNavigation(RaceListScreen);
