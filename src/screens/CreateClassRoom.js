import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Item, Input, Label, Picker, Form, Icon } from 'native-base';


export default class CreateClassRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: undefined
        }
    }

    onValueChange = (value) => {
        this.setState({ selected: value })
    }

    handleRightHeader = (onPress) => {
        return (
            <Icon type="MaterialIcons" name="check" style={{ color: '#dbd8d0' }} onPress={onPress} />
        )
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Tambah Ruang Kelas',
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
                            <Label style={{
                                color: '#dbd8d0',
                                fontSize: 14,
                                marginLeft: 16
                            }}>{'Nama Kelas'}</Label>
                            <Item>
                                <Input
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 14,
                                        color: '#FFFFFF',
                                    }} />
                            </Item>
                        </View>
                        {/* <View style={{ paddingVertical: 16 }}>
                            <Label style={{
                                color: '#dbd8d0',
                                fontSize: 14,
                                marginLeft: 16
                            }}>{'Nama Instansi'}</Label>
                            <Item picker style={{ marginLeft: 12 }}>
                                <Picker
                                    mode={'dropdown'}
                                    selectedValue={this.state.selected}
                                    placeholder={"Pilih"}
                                    onValueChange={this.onValueChange.bind(this)}
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 14,
                                        color: '#FFFFFF',
                                        backgroundColor: 'transparent',
                                    }}
                                >
                                    <Picker.Item label={"BBPLK Bekasi"} value="1" />
                                    <Picker.Item label={"BBPLK Bandung"} value="2" />
                                    <Picker.Item label={"Lainnya"} value="Lainnya" />
                                </Picker>
                            </Item>
                        </View> */}
                    </Form>
                </Content>
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
    }
})
