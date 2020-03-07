import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Card, CardItem, Fab, Thumbnail, Left, Right } from 'native-base';
import ViewMoreText from 'react-native-view-more-text'
import Moment from 'moment'

renderViewMore = (onPress) => {
    return (
        <Text onPress={onPress} style={styles.actionCaptionPost}>{"view more"}</Text>
    );
}

renderViewLess = (onPress) => {
    return (
        <Text onPress={onPress} style={styles.actionCaptionPost}>{"view less"}</Text>
    );
}

const CardComment = (props) => {
    return (
            <Card style={{ marginTop: 0, marginBottom: 0}}>
                <CardItem bordered style={{ backgroundColor: 'white'}}>
                    <Thumbnail source={props.avatar} style={{width: 20, height: 20}}/>
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginHorizontal: 16 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Roboto', }}>{props.userName}</Text>
                        <Text style={styles.infoDatePost}>{`${Moment(props.datePost).format('DD MMM YYYY')} at ${Moment(props.datePost).format('HH:mm')}`}</Text>
                    </View>
                </CardItem>
                <CardItem bordered>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                        textStyle={{fontSize: 12}}
                    >
                        <Text>{props.description}</Text>
                    </ViewMoreText>
                </CardItem>
            </Card>
    )
}

export default CardComment

const styles = StyleSheet.create({
    infoDatePost: {
        fontFamily: 'Roboto',
        fontSize: 8,
        color: '#747D8C'
    },
    actionCaptionPost: {
        fontFamily: 'Roboto',
        color: '#45AAF2'
    },
})
