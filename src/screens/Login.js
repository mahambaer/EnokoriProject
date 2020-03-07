import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, AsyncStorage, Alert } from 'react-native'
import { Container, Header, Content, Footer, Form, Button } from 'native-base'
import axios from 'axios'

import TextInput from './../components/TextInput'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility: true,
            email: '',
            password: ''
        }
    }

    handleVisibility = () => {
        this.setState({ visibility: !this.state.visibility })
    }

    handleLogin = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                    mutation ($email: EmailAddress!, $password: String!) {
                        login (input: {
                            email: $email
                            password: $password
                        }) {
                            user {
                                id
                            }
                            token
                        }
                    }
                `,
                variables: {
                    email: this.state.email,
                    password: this.state.password
                }
            }
        }).then(async (res) => {
            await AsyncStorage.setItem('@enokori:token', res.data.data.login.token)
            // this.props.navigation.navigate('Home', {id: res.data.data.login.user.id})
            this.props.navigation.reset({
                index: 0,
                routes: [
                    {
                        name: 'Home',
                        params: { id: res.data.data.login.user.id }
                    }
                ]
            })
        }).catch(err => {
            Alert.alert('Gagal Login', 'Periksa lagi E-mail dan Password Anda')
        })
    }

    render() {
        this.props.navigation.setOptions({
            headerMode: 'none',
            headerShown: false,
            keyboardHandlingEnabled: false
        })
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <Image
                            source={require('./../assets/img/logo.png')}
                            style={{ width: 193, height: 57 }} />
                        <Text
                            style={{
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: 'white',
                                marginVertical: 10
                            }}>
                            {'Selamat Datang!'}
                        </Text>
                    </View>
                    <Form style={{ paddingRight: 8 }}>
                        <TextInput
                            label={'Email'}
                            keyboardType={'email-address'}
                            onChangeText={(text) => this.setState({ email: text })} />
                        <TextInput
                            password={true}
                            label={'Password'}
                            secureTextEntry={this.state.visibility}
                            changeVisibility={this.handleVisibility}
                            onChangeText={(text) => this.setState({ password: text })} />
                    </Form>

                    <View style={{ marginVertical: 50, paddingHorizontal: 10 }}>
                        <Button block warning onPress={this.handleLogin}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Log In</Text>
                        </Button>
                        <View style={{ marginTop: 12 }}>
                            <Text style={{ color: 'white', fontSize: 14 }}>{'Anda belum terdaftar? Silahkan '}
                                <Text
                                    style={{ color: 'orange' }}
                                    onPress={() => this.props.navigation.navigate('Register')}>{'Daftar'}</Text>
                                {' di sini'}</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
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

