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

const Constructor = (props) => {
    console.log(props);
    const renderConstructorDetails = () => {
        let constructor = props.constructor;
        if (constructor != null && Object.keys(constructor).length != 0) {
            return (
                <View style={ styles.center  }>
                    <Text style={ styles.title }>Nome:</Text>
                    <Text style={ styles.descr }>
                        {constructor.name}
                    </Text>

                    <Text style={ styles.title }>Nacionalidade:</Text>
                    <Text style={ styles.descr }>
                        {constructor.nationality}
                    </Text>
                </View>
            );
        }
        return null;
    }
    return renderConstructorDetails();
};


export default Constructor;