import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const Race = (props) => {
    console.log(props);
    const renderRaceDetails = () => {
        let race = props.race;
        if (race != null && Object.keys(race).length != 0) {
            return (
                <View>
                    <Text>{`Nome: ${race.raceName}`}</Text>
                    <Text>{`Nome: ${race.Circuit.circuitName}`}</Text>
                    <Text>{`Local: ${race.Circuit.Location.locality}`}</Text>
                    <Text>{`Pais: ${race.Circuit.Location.country}`}</Text>
                </View>
            );
        }
        return null;
    };
    return renderRaceDetails();
};
export default Race;