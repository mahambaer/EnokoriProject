import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Item, Input, Label, Picker, Form, Icon, Textarea } from 'native-base';

export default class CreateTopic extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleRightHeader = (onPress) => {
        return (
            <Icon type="MaterialIcons" name="check" style={{ color: '#dbd8d0' }} onPress={onPress} />
        )
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Tambah Topik',
            headerRight: () => this.handleRightHeader(() => this.props.navigation.goBack()),
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyleApp,
            headerRightContainerStyle: { marginRight: 16 },
        });
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Form>
                        <View style={{ paddingVertical: 16 }}>
                            <Item>
                                <Input
                                    placeholder={'Judul Topik'}
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 14,
                                        color: '#FFFFFF',
                                    }} />
                            </Item>
                        </View>
                        <View style={{ paddingLeft: 16 }}>
                            <Textarea style={{ color: 'white' }} rowSpan={15} placeholder={'Apa yang ingin Anda bahas?'} />
                        </View>
                    </Form>
                </Content>
                    <View style={styles.sectionAddPhoto}>
                        <Icon type="MaterialIcons" name="insert-photo" style={{ color: '#dbd8d0' }} />
                        <Text style={styles.textTitleAddPhoto}>{"Add Photo"}</Text>
                    </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headerStyleApp: {
        backgroundColor: '#d97034',
        elevation: 0
    },
    container: {
        backgroundColor: '#1a1121',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    content: {
        width: '100%',
        paddingHorizontal: 5
    },
    sectionAddPhoto: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    textTitleAddPhoto: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#dbd8d0',
        marginLeft: 8,
        textAlignVertical: 'top'
    }
})
