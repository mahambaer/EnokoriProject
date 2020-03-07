import React from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Card, CardItem } from 'native-base';

const CardClassRoom = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Card style={{ marginTop: 16 }}>
                <CardItem header bordered style={styles.cardItemHeader}>
                    <Text style={styles.classNameText}>{props.className}</Text>
                    <Text style={styles.schoolName}>{props.schoolName}</Text>
                </CardItem>
                <CardItem
                    style={{
                        backgroundColor: props.bodyBackgroundColor,
                        height: 30
                    }} />
            </Card>
        </TouchableOpacity>
    )
}

export default CardClassRoom

const styles = StyleSheet.create({
    cardItemHeader: { 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        backgroundColor: '#e6ebeb' 
    },
    classNameText: { 
        fontFamily: "Roboto", 
        fontSize: 20, 
        fontWeight: "bold",
        color: '#4d6161'
    },
    schoolName: { 
        fontFamily: "Roboto", 
        fontSize: 10, 
        color: "#a89687" 
    }
})
