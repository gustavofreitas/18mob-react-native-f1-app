import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

const styles = StyleSheet.create({
    center: {
        textAlign: "center",
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10
    },
    descr: {
        fontSize: 20,
        textAlign: "center",
        marginLeft: 10
    }
}); 

const Race = (props) => {
    console.log(props);
    const renderRaceDetails = () => {
        let race = props.race;
        if (race != null && Object.keys(race).length != 0) {
            return (
                <View style={ styles.center  }>
                    <Text style={ styles.title }>Nome da Corrida:</Text>
                    <Text style={ styles.descr }>
                        {race.raceName}
                    </Text>

                    <Text style={ styles.title }>Nome do Circuito:</Text>
                    <Text style={ styles.descr }>
                        {race.Circuit.circuitName}
                    </Text>

                    <Text style={ styles.title }>Local:</Text>
                    <Text style={ styles.descr }>
                        {race.Circuit.Location.locality}
                    </Text>

                    <Text style={ styles.title }>País:</Text>
                    <Text style={ styles.descr }>
                        {race.Circuit.Location.country}
                    </Text>
                </View>
            );
        }
        return null;
    };
    return renderRaceDetails();
};
export default Race;