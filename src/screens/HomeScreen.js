import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.waper}>
            <Text>HomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;