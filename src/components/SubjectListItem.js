import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Card, CardItem, Right, Left, Icon } from 'native-base';

const SubjectListItem = (props) => {
    return (
        <CardItem button onPress={props.onPress}>
            <Left>
                <Icon type="FontAwesome5" name={props.iconName} />
            </Left>
            <Text style={{ flex: 5 }}>{props.title}</Text>
            <Right>
                <Icon type="FontAwesome5" name="chevron-right" />
            </Right>
        </CardItem>
    )
}

export default SubjectListItem

const styles = StyleSheet.create({})
