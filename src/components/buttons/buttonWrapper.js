import React from 'react';
import { TouchableOpacity } from 'react-native';

const ButtonWrapper = ({ onPress, isDisabled, style, children  }) => {
    return(
        <TouchableOpacity 
            style={ style }
            onPress={ onPress }
            disabled={ isDisabled }
            activeOpacity={1}
        >
            { children }
        </TouchableOpacity> 
    );
};

export default ButtonWrapper;
