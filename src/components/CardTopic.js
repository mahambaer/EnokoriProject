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

const CardTopic = (props) => {
    return props.state ?
        <TouchableOpacity onPress={props.onPress}>
            <Card style={{ marginTop: 16 }}>
                <CardItem header bordered style={{ backgroundColor: '#b5b372', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "white", fontFamily: 'Roboto', }}>{props.title}</Text>
                    <Text style={styles.infoDatePost}>{`created by ${props.userName}`}</Text>
                    <Text style={styles.infoDatePost}>{`${Moment(props.datePost).format('DD MMM YYYY')} at ${Moment(props.datePost).format('HH:mm')}`}</Text>
                </CardItem>
                <CardItem bordered>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                    >
                        <Text>{props.description}</Text>
                    </ViewMoreText>
                </CardItem>
            </Card>
        </TouchableOpacity>
        :
        <View>
            <Card style={{ marginTop: 16 }}>
                <CardItem header bordered style={{ backgroundColor: '#b5b372', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "white", fontFamily: 'Roboto', }}>{props.title}</Text>
                    <Text style={styles.infoDatePost}>{`created by ${props.userName}`}</Text>
                    <Text style={styles.infoDatePost}>{`${Moment(props.datePost).format('DD MMM YYYY')} at ${Moment(props.datePost).format('HH:mm')}`}</Text>
                </CardItem>
                <CardItem bordered>
                    <ViewMoreText
                        numberOfLines={3}
                        renderViewMore={renderViewMore}
                        renderViewLess={renderViewLess}
                    >
                        <Text>{props.description}</Text>
                    </ViewMoreText>
                </CardItem>
            </Card>
        </View>
    
}

export default CardTopic

const styles = StyleSheet.create({
    infoDatePost: {
        fontFamily: 'Roboto',
        fontSize: 10,
        color: '#c8f687'
    },
    actionCaptionPost: {
        fontFamily: 'Roboto',
        color: '#45AAF2'
    },
})
