import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const Driver = (props) => {
    console.log(props);
    const renderDiverDetails = () => {
        let driver = props.driver;
        if(driver != null && Object.keys(driver).length != 0){
            return (
                <View>
                    <Text>{`Nome: ${driver.givenName} ${driver.familyName}` }</Text>
                    <Text>{`Data de  ascimento: ${driver.dateOfBirth}`}</Text>
                    <Text>{`Nacionalidade: ${driver.nationality}`}</Text>
                </View>
            );
        }
        return null
    };
    return renderDiverDetails();
};
export default Driver;