import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Form, Content, Button, Picker, Item, Label } from 'native-base'

import TextInput from './../components/TextInput'
import PickerInput from './../components/PickerInput'

export default class TeacherRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility: true,
            selected: undefined,
            name: '',
            email: '',
            school: ''
        }
    }

    handleVisibility = () => {
        this.setState({ visibility: !this.state.visibility })
    }
    
    onValueChange = (value) => {
        this.setState({ selected: value })
    }

    render() {
        this.props.navigation.setOptions({
            headerTitle: 'Registrasi Pengajar',
            keyboardHandlingEnabled: false,
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyle
        });
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <View style={{ marginTop: 2, alignItems: 'center' }}>
                        <Text
                            style={{
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: 'white',
                                marginVertical: 10
                            }}>
                            {'Lengkapi data Anda'}
                        </Text>
                    </View>
                    <Form style={{ paddingRight: 8 }}>
                        <TextInput
                            label={'Nama Lengkap'}/>
                        <TextInput
                            label={'Email'}
                            keyboardType={'email-address'} />
                        <TextInput
                            password={true}
                            label={'Password'}
                            secureTextEntry={this.state.visibility}
                            changeVisibility={this.handleVisibility} />
                        <View style={styles.sectionForm}>
                            <Label style={{
                                color: '#dbd8d0',
                                fontSize: 14,
                                marginLeft: 2
                            }}>{"Nama Instansi"}</Label>
                            <Item picker>
                                <Picker
                                    mode={'dropdown'}
                                    selectedValue={this.state.selected}
                                    placeholder={"Pilih"}
                                    onValueChange={this.onValueChange.bind(this)}
                                    style={{
                                        fontFamily: 'Roboto',
                                        fontSize: 14,
                                        color: '#FFFFFF',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    <Picker.Item label={"BBPLK Bekasi"} value="1" />
                                    <Picker.Item label={"BBPLK Bandung"} value="2" />
                                    <Picker.Item label={"Lainnya"} value="Lainnya" />
                                </Picker>
                            </Item>
                        </View>
                        {this.state.selected === 'Lainnya' ?
                            <TextInput
                                label={'Instansi Lainnya'} />
                            :
                            null
                        }
                    </Form>
                    <View style={{ marginVertical: 50, paddingHorizontal: 10 }}>
                        <Button block warning onPress={() => this.props.navigation.reset({routes: [{name: 'Home'}]})}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Sign In</Text>
                        </Button>
                        <View style={{ marginTop: 12 }}>
                            <Text style={{ color: 'white', fontSize: 14 }}>{'Anda sudah terdaftar? Silahkan '}
                                <Text
                                    style={{ color: 'orange' }}
                                    onPress={() => this.props.navigation.navigate('Login')}>{'Login'}</Text>
                                {' di sini'}</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#1a1121',
        elevation: 0
    },
    container: {
        backgroundColor: '#1a1121',
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    sectionForm: {
        paddingLeft: 12,
        paddingVertical: 10
    },
    content: {
        width: '100%', 
        paddingHorizontal: 5
    }
})
