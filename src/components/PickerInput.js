import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Label, Input, Item, Icon, Picker } from 'native-base';

const PickerInput = (props) => {
    return (
        <View style={styles.sectionForm}>
        <Label style={{
            color: '#dbd8d0',
            fontSize: 14,
            marginLeft: 2
        }}>{props.label}</Label>
            <Item picker>
                <Picker 
                    {...props}
                    mode={'dropdown'}
                    selectedValue={props.selectedValue}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    onValueChange={props.onValueChange}
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: 14,
                        color: '#FFFFFF',
                        backgroundColor: 'transparent'
                    }}
                >
                    {props.pickerItems()}
                </Picker>
            </Item>
        </View>
    )
}

export default PickerInput

const styles = StyleSheet.create({
    sectionForm: {
        paddingLeft: 12,
        paddingVertical: 10
    },
    iconEye: {
        paddingRight: 16,
        fontSize: 16,
        color: '#dbd8d0'
    }
})
