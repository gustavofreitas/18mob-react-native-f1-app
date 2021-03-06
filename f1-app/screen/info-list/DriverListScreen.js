import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, List, ListItem, Body } from 'native-base';
import { withNavigation } from 'react-navigation';
import Loading from '../../components/Loading';
import { ScrollView } from 'react-native-gesture-handler';
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
  }
});

class DriverListScreen extends React.Component {
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
    fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
      .then((response) => response.json())
      .then((response) => {
        const races = response.MRData.DriverTable.Drivers;
        this.setState({ loading: false, data: races });
      })
      .catch(err => console.log(err));

    return this.props.navigation.state.season || "Oi!";
  }

  handleClick(element){
    this.props.navigation.push('Detail', {driver: element});
    
  }
  
  renderDrivers() {
    let result = [];
    if (this.state.data.length) {
      this.state.data.forEach(element => {
        result.push(
          <ListItem key={`driver-${element.driverId}`} button={true} onPress={() => { this.handleClick(element) }}>
            <Body>
              <Text>{`${element.givenName} ${element.familyName}`}</Text>
            </Body>
          </ListItem>
        )
      });
      return result;
    }
    return null;
  }

  renderLoading() {
    return <View style={style.container}>
      <Loading show={this.state.loading} color="blue" />
    </View>
  }

  render() {
    const results = this.renderDrivers();
    return (
      (results && results.length)? 
      <ScrollView>
        <Text style={ style.title }>
          Lista de Pilotos da Temporada {this.state.season}
        </Text>
        <List>{results}</List>
      </ScrollView>
      :this.renderLoading()
    );
  }
}

export default withNavigation(DriverListScreen)
