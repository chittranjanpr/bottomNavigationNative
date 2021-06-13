import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { colors } from '../../styles/colors';
import TextFile from '../TextFile';

import CardContainer from './card'

const ListContainer = ({ data, navigation }) => {

    const renderSeparator = () => <View style={styles.speparator} />;

    const emptyComponent = () => {

        return (
            <TextFile
                useFontScaling
                desc={'No data found'}
                textSize={14}
                textColor={colors.BLACK}
                textWeight={'bold'}
                style={{ paddingVertical: 10, paddingHorizontal: 10, textAlign: 'center' }}
            />
        )
    }
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            ListEmptyComponent={() => emptyComponent()}
            renderItem={({ item, index }) => <CardContainer key={index} item={item} navigation={navigation} />}
            ItemSeparatorComponent={() => renderSeparator()}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    speparator: {
        height: 10
    }
});


export default ListContainer;