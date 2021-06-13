import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import ListContainer from '../../components/List';

const HistoryScreen = ({ navigation }) => {

    let historyArray = useSelector(state => ({
        updateList: state.updateList,
    }));

    return (
        <View style={styles.container}>
            <ListContainer data={historyArray.updateList} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    speparator: {
        height: 10
    }
});

export default HistoryScreen;

