import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, List, ListItem, Body } from 'native-base';
import { withNavigation } from 'react-navigation';
import Loading from '../../components/Loading';
import { ScrollView } from 'react-native-gesture-handler';

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


class ConstructorListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.getData(season);
  }

  getData(season) {
    console.log(season)
    fetch(`http://ergast.com/api/f1/${season}/constructors.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.ConstructorTable.Constructors;
        this.setState({ loading: false, data: races });
        //console.log(response);
      })
      .catch(err => console.log(err));

    return this.props.navigation.state.season || "Oi!";
  }

  handleClick(element){
    this.props.navigation.push('Detail', {team: element});
    
  }

  renderConstructor(){
    let result = [];
    if (this.state.data.length){
        this.state.data.forEach(element => {
          result.push(
            <ListItem button={true} onPress={() => { this.handleClick(element) }}>
              <Body>                
                <Text style={ style.leftColumn  }>{element.name}</Text>
                <Text style={ style.midColumn }>{element.nationality}</Text>
              </Body>
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
      const results = this.renderConstructor();
      return (
          (results && results.length)? 
            <ScrollView>
              <Text style={ style.title }>
                Lista de Construtores da Temporada {this.state.season}
              </Text>
              <List>{results}</List>
            </ScrollView>
          :this.renderLoading()
      );
    }
  }

export default withNavigation(ConstructorListScreen);
