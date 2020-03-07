import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Form, Content, Button } from 'native-base'

import TextInput from './../components/TextInput'

export default class StudentRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility: true
        }
    }

    render() {
        this.props.navigation.setOptions({
            headerTitle: 'Registrasi Peserta',
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
                    </Form>
                    <View style={{ marginVertical: 50, paddingHorizontal: 10 }}>
                        <Button block warning onPress={() => this.props.navigation.navigate('Home')}>
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
    content: {
        width: '100%', 
        paddingHorizontal: 5
    }
})
