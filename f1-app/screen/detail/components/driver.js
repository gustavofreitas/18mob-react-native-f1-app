import React from 'react';
import { View } from 'react-native';
import { Button, Text, Separator } from 'native-base';

const Driver = (props) => {
    console.log(props);

    const renderDiverDetails = () => {
        let driver = props.driver;
        return (
            <View>
                <Text>{`Nome: ${driver.givenName} ${driver.familyName}` }</Text>
                <Text>{`Data de Nascimento: {${driver.dateOfBirth}`}</Text>
                <Text>{`Nacionalidade: ${driver.nationality}`}</Text>
            </View>
        );
            
    };

    return renderDiverDetails();
};

export default Driver;