import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Content, Button, Icon, Left, Right } from 'native-base';

export default class Register extends Component {
    render() {
        this.props.navigation.setOptions({
            headerTitle: null,
            keyboardHandlingEnabled: false,
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyle
        });

        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <View style={{ marginTop: 100, alignItems: 'center' }}>
                        <Text
                            accessibilityRole={'header'}
                            style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto' }}>{'Saya Adalah'}</Text>

                    </View>
                    <View style={{ marginTop: 30, alignItems: 'center' }}>
                        <Button iconRight block 
                            style={{
                                backgroundColor: '#b55604', 
                                marginVertical: 20, 
                                paddingHorizontal: 10
                            }}
                            onPress={() => this.props.navigation.navigate('Teacher')}>
                            <Left>
                                <Icon type={'MaterialIcons'} name={'work'} />
                            </Left>
                            <Text style={{fontFamily: 'Roboto', fontSize: 25, color: 'white'}}>{'Pengajar'}</Text>
                            <Right>
                                <Icon type={'MaterialIcons'} name={'keyboard-arrow-right'} />
                            </Right>
                        </Button>
                        <Button iconRight block 
                            style={{
                                backgroundColor: '#399c05', 
                                marginVertical: 20,
                                paddingHorizontal: 10
                            }}
                            onPress={() => this.props.navigation.navigate('Student')}>
                            <Left>
                                <Icon type={'MaterialIcons'} name={'school'} />
                            </Left>
                            <Text style={{fontFamily: 'Roboto', fontSize: 25, color: 'white'}}>{'Peserta'}</Text>
                            <Right>
                                <Icon type={'MaterialIcons'} name={'keyboard-arrow-right'} />
                            </Right>
                        </Button>
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
