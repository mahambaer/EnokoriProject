import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Label, Input, Item, Icon } from 'native-base';

const TextInput = (props) => {
    return (
        <View style={styles.sectionForm}>
            <Label style={{
                color: '#dbd8d0',
                fontSize: 14,
                marginLeft: 16
            }}>{props.label}</Label>
            <Item fixedLabel>
                <Input
                    {...props}
                    secureTextEntry={props.secureTextEntry}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    placeholderTextColor={props.placeholderTextColor}
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: 14,
                        color: '#FFFFFF',
                    }} />
                {props.password ?
                    props.secureTextEntry ?
                        <Icon active
                            onPress={props.changeVisibility}
                            type='MaterialIcons'
                            name='visibility-off'
                            style={styles.iconEye} />
                        :
                        <Icon active
                            onPress={props.changeVisibility}
                            type='MaterialIcons'
                            name='visibility'
                            style={styles.iconEye} />
                    :
                    null
                }
            </Item>
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    sectionForm: {
        paddingVertical: 10
    },
    iconEye: {
        paddingRight: 16,
        fontSize: 16,
        color: '#dbd8d0'
    }
})
