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
        console.log(response);
      })
      .catch(err => console.log(err));

    return this.props.navigation.state.season || "Oi!";
  }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Constructor List</Text>
          <Button
          title="Go to Constructor"
          onPress={() => this.props.navigation.push('Detail')}
        />
        </View>
      );
    }
  }

export default withNavigation(ConstructorListScreen);
