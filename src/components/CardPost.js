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

const CardPost = (props) => {
    return props.state ?
        <TouchableOpacity onPress={props.onPress}>
            <Card style={{ marginTop: 16, marginBottom: 0 }}>
                <CardItem header bordered style={{ backgroundColor: '#bfb3ff' }}>
                    <Thumbnail source={props.avatar} style={{ width: 32, height: 32 }} />
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginHorizontal: 16 }}>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: 'Roboto', }}>{props.userName}</Text>
                        <Text style={styles.infoDatePost}>{`${Moment(props.datePost).format('DD MMM YYYY')} at ${Moment(props.datePost).format('HH:mm')}`}</Text>
                    </View>
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
                <CardItem footer button boredered onPress={props.createComment}>
                    <Icon type="MaterialIcons" name="comment" />
                    <Text>{'Komentar'}</Text>
                    <Text style={{color: '#27b893'}}>{` (${props.commentNumber})`}</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
        :
        <View>
            <Card style={{ marginTop: 16, marginBottom: 0 }}>
                <CardItem header bordered style={{ backgroundColor: '#bfb3ff' }}>
                    <Thumbnail source={props.avatar} style={{ width: 32, height: 32 }} />
                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginHorizontal: 16 }}>
                        <Text style={{ fontSize: 14, color: "white", fontFamily: 'Roboto', }}>{props.userName}</Text>
                        <Text style={styles.infoDatePost}>{`${Moment(props.datePost).format('DD MMM YYYY')} at ${Moment(props.datePost).format('HH:mm')}`}</Text>
                    </View>
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
                <CardItem footer button boredered onPress={props.createComment}>
                    <Icon type="MaterialIcons" name="comment" />
                    <Text>{'Komentar'}</Text>
                    <Text style={{color: 'blue'}}>{` (${props.commentNumber})`}</Text>
                </CardItem>
            </Card>
        </View>
}

export default CardPost

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
