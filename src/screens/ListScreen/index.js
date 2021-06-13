import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

import Loader from '../../components/Loader';
import ListContainer from '../../components/List';

const ListScreen = ({ navigation }) => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        setIsloading(true);
        axios.get('https://www.colourlovers.com/api/colors?format=json&numResults=30')
            .then(res => {
                if (res.data) {
                    setDetails(res.data);
                }
                setIsloading(false);
            })
            .catch(() => {
                setIsloading(false);
            })
    }

    return (
        <View style={styles.container}>
            { isLoading ?
                <Loader loading={isLoading} />
                :
                <ListContainer data={details} navigation={navigation} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1
    },
    speparator: {
        height: 10
    }
});


export default ListScreen;