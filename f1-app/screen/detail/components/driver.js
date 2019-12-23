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

const Driver = (props) => {
    const formatDate = (date) =>
        date.split('-').reverse().join('/');

    const renderDriverDetails = () => {
        let driver = props.driver;
        if(driver != null && Object.keys(driver).length != 0){
            return (
                <View style={ styles.center  }>
                    <Text style={ styles.title }>Nome:</Text>
                    <Text style={ styles.descr }>
                        {driver.givenName} {driver.familyName}
                    </Text>

                    <Text style={ styles.title }>Data de Nascimento:</Text>
                    <Text style={ styles.descr }>
                        {formatDate(driver.dateOfBirth)}
                    </Text>

                    <Text style={ styles.title }>Nacionalidade:</Text>
                    <Text style={ styles.descr }>
                        {driver.nationality}
                    </Text>
                </View>
            );
        }
        return null
    };
    return renderDriverDetails();
};
export default Driver;