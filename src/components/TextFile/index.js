import React from 'react';
import { Text, Platform } from 'react-native';

import { moderateScale } from '../../utils/scaling';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';


const TextFile = (props) => {
    const { textColor, textSize, textWeight, desc, textFont, insideText, insideTextFont,
        insideTextColor, insideTextSize, insideTextWeight, insideTextDesc, useFontScaling } = props;
    const color = textColor || colors.BLACK;
    const fontSize = useFontScaling ? (moderateScale(textSize, 0.3) || moderateScale(13, 0.3)) : textSize || 13;
    return (
        <Text
            {...props}
            numberOfLines={props.totalLines}
            style={[props.style, { color, fontSize, fontWeight: textWeight, fontFamily: textFont ? textFont : Platform.OS === 'android' ? fonts.ROBOTO : null }]}
        >
            { desc}
            {
                insideText ?
                    <Text
                        style={[{
                            color: insideTextColor, fontSize: useFontScaling ? moderateScale(insideTextSize, 0.3) : insideTextSize,
                            fontWeight: insideTextWeight, fontFamily: insideTextFont ? insideTextFont : Platform.OS === 'android' ? fonts.ROBOTO : null
                        }]}
                    >{insideTextDesc}</Text>
                    :
                    null
            }
        </Text>
    );
};

export default TextFile;
