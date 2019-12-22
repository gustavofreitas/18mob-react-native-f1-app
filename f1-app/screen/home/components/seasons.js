import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        width: '100%'
      },
      item: {
        width: '30%',
        height: 80,
        textAlign: "center",
        margin: '1.5%',
        backgroundColor: '#FF0003'
      },
      itemText: {
          width: '100%',
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold"
      }
})

const Seasons = (props) => {
    console.log(props);

    const renderSeasons = () => {
        let items = [];
        for (let i = 0; i < 20; i++) {
            const year = `20${ i > 9 ? i : `0${i}`}`
            items.push(
                <Button 
                    style={ styles.item }
                    key={ `season-${year}`}
                    onPress={ ()=> props.handleSeason(year) }
                >
                    <Text style={ styles.itemText }>
                        { year }
                    </Text>
                </Button>
            );
        }

        return items;
    }

    return (
        <View style={ styles.container }>
            { renderSeasons() }
        </View>
    );
};

export default Seasons;