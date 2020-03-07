import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Card, CardItem, Right, Left, Icon } from 'native-base';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{marginVertical: 5}}>
            <Card>
                <CardItem style={{flexDirection: 'row', backgroundColor: props.backgroundColor}}>
                    <Left>
                        <Icon type={props.iconType} name={props.iconName} style={{color: 'white'}}/>
                    </Left>
                    <Text style={styles.title}>{props.title}</Text>
                    <Right>
                        <Icon type='FontAwesome5' name='chevron-right' style={{color: 'white'}}/>
                    </Right>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
})
