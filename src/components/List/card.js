import * as React from 'react';
import { Button, Card, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'
import { addToList } from '../../store/actions';

const CardContainer = ({ item, navigation }) => {

    const dispatch = useDispatch();

    const handleSelect = () => {
        dispatch(addToList({ type: "ADD_TO_HISTORY", data: item }));
        navigation.navigate('detailListScreen', { text: item })
    }

    return <Card>
        <Card.Cover style={styles.cover} source={{ uri: item.imageUrl }} />
        <Card.Content>
            <Title>Color - {item.title}</Title>
            <Card.Actions style={styles.bottoomAlign}>
                <Button onPress={() => handleSelect()}>View</Button>
            </Card.Actions>
        </Card.Content>
    </Card>
};

const styles = StyleSheet.create({
    cover: {
        height: 100
    },
    bottoomAlign: {
        position: 'absolute',
        right: 0
    }
});


export default CardContainer;