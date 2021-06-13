import React from 'react';

import { View, StyleSheet, Image } from 'react-native'
import TextFile from '../../components/TextFile';
import { colors } from '../../styles/colors';

const DetailListScreen = ({ route }) => {
    const { text } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: text.imageUrl }} style={{ width: '100%', height: '100%' }} />
            </View>
            <TextFile
                useFontScaling
                desc={'Title - '}
                textSize={14}
                textColor={colors.BLACK}
                textWeight={'bold'}
                insideText
                insideTextSize={16}
                insideTextColor={colors.BLACK}
                insideTextDesc={text.title}
                style={{ paddingVertical: 10, paddingHorizontal: 10, textAlign: 'center' }}
            />
            <TextFile
                useFontScaling
                desc={'Hex code - '}
                textSize={14}
                textColor={colors.BLACK}
                textWeight={'bold'}
                insideText
                insideTextSize={16}
                insideTextColor={colors.BLACK}
                insideTextDesc={text.hex}
                style={{ paddingVertical: 10, paddingHorizontal: 10, textAlign: 'center' }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: '60%',
        height: 200,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default DetailListScreen;
