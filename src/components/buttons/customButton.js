import React from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

import { colors } from '../../styles/colors';
import TextFile from '../TextFile';

const CustomButtom = (props) => {
    const { textDesc, textColor, textSize, textWeight, background, buttonRadius, onPress, 
        isDisabled, uiLoading, uiLoadingColor } = props;
    const backgroundColor = background || colors.TRANSPARENT;

    return(
        <TouchableOpacity 
            style={[ props.style,
            isDisabled ? styles.disabledWrapper : styles.wrapper, 
            isDisabled ? { backgroundColor: colors.BORDER_GREY } : { backgroundColor },
            { borderRadius: buttonRadius } ]}
            onPress={ onPress }
            disabled={ isDisabled }
        >
            {
                uiLoading ? 
                    <View style={ styles.indicatorWrapper }>
                        <ActivityIndicator size="small" color={ uiLoadingColor }/>
                    </View>
                    :
                    <TextFile 
                        useFontScaling={ props.useFontScaling }
                        desc={ textDesc }
                        textSize={ textSize }
                        textColor={ isDisabled ? colors.BLACK : textColor }
                        textWeight={ textWeight ? 'bold' : 'normal' }
                        style={{ paddingVertical: 5, paddingHorizontal: 8, textAlign: 'center' }}  
                    />
            }
        </TouchableOpacity> 
    );
};

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
    },
    indicatorWrapper: {
        paddingVertical: 8,
        paddingHorizontal: 30
    },
    disabledWrapper: {

    }
});

export default CustomButtom;
