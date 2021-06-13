import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../styles/colors';

const Loader = props => {

    let backgroundScreenColor = props.backgroundScreenColor ? props.backgroundScreenColor : null;
    let loadingColor = props.loadingColor ? props.loadingColor : colors.BLACK;

    return (props.loading ?
        <View style={[styles.container, { backgroundColor: backgroundScreenColor }]}>
            <ActivityIndicator
                animating={props.loading}
                size={'large'}
                color={loadingColor}
            />
        </View> : null
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 55,
    },
});

export default Loader;