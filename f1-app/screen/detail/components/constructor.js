import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const Constructor = (props) => {
    console.log(props);
    const renderConstructorDetails = () => {
        let constructor = props.constructor;
        if (constructor != null && Object.keys(constructor).length != 0) {
            return (
                <View>
                    <Text>{`Nome: ${constructor.name}`}</Text>
                    <Text>{`Nacionalidade: ${constructor.nationality}`}</Text>
                </View>
            );
        }
        return null;
    }
    return renderConstructorDetails();
};


export default Constructor;