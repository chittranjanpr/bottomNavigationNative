import React from 'react';
import { View, StyleSheet } from 'react-native';

import {colors} from '../../styles/colors'

const Aux = (props) => (
    <View style={ styles.wrapper, props.style ? { ...props.style } : '' }>
        { props.children }
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
});

export default Aux;
