import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import { Container, Content, Button, Icon, Card, CardItem, Fab, Thumbnail } from 'native-base';
import axios from 'axios'

import CardClassRoom from './../components/CardClassRoom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: undefined,
            enrollments: []
        }
    }

    handleLeftHeader = (role, avatar) => {
        return role == 'ADMIN' || role == 'TEACHER' ?
            avatar === '' ?
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditUser')}>
                    <Thumbnail source={require('./../assets/img/avatar.png')} style={{ width: 32, height: 32 }} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditUser')}>
                    <Thumbnail source={{ uri: avatar }} style={{ width: 32, height: 32 }} />
                </TouchableOpacity>
            :
            null
    }

    getUserRole = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                    query ($id: String!) {
                        user(id: $id) {
                            role
                        }
                    }
                ` ,
                variables: {
                    id: this.props.route.params.id
                }
            }
        }).then(res => {
            this.setState({ role: res.data.data.user.role })
        })
    }

    getClassRooms = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                  query{
                    enrollments{
                        classRoom{
                        id
                        title
                        color
                        school{
                          name
                        }
                      }
                      user{
                        id
                      }
                    }
                  }
                `
            }
        }).then(res => {
            this.setState({ enrollments: res.data.data.enrollments })
        })
    }
    handleLogout = async () => {
        const token = await AsyncStorage.getItem('@enokori:token')
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: "POST",
            data: {
                query: `
                    mutation ($token: String!){
                        logout (input: {
                            token: $token
                        }) {
                            firstName
                        }
                    }
                `,
                variables: {
                    token: token
                }
            }
        }).then(async (res) => {
            Alert.alert(
                'Konfirmasi Logout',
                'Apakah Anda ingin logout?',
                [
                    {text: 'No', onPress: () => {}, style: "cancel"},
                    {text: 'Yes', onPress: async () => {
                        await AsyncStorage.removeItem('@enokori:token')
                        this.setState({
                            role: undefined,
                            enrollments: []
                        })
                        this.props.navigation.navigate('Login')
                    }}
                ]
            )
        }).catch(err => {
            alert(err)
        })
    }

    componentDidMount() {
        this.getClassRooms()
        this.getUserRole()
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerLeft: () => this.handleLeftHeader(this.state.role, ''),
            headerTitle: () => <Image source={require('./../assets/img/logo.png')} />,
            headerRight: () => <Icon type="MaterialIcons" name="exit-to-app" style={{ color: '#dbd8d0' }} onPress={() => this.handleLogout()} />,
            headerRightContainerStyle: { marginRight: 16 },
            headerLeftContainerStyle: { marginLeft: 16 },
            headerStyle: styles.headerStyleApp
        });
        
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    {this.state.enrollments.map((item) =>{
                        if(item.user.id === this.props.route.params.id){
                            return <CardClassRoom
                                key={item.classRoom.id}
                                className={item.classRoom.title}
                                schoolName={item.classRoom.school.name}
                                onPress={() => this.props.navigation.navigate('ClassRoom', { classId: item.classRoom.id, userId: this.props.route.params.id})}
                                //bodyBackgroundColor={`rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() + 0.1})`}
                                bodyBackgroundColor={item.classRoom.color}
                            />
                        }
                    }
                    )}
                </Content>
                {this.state.role === "ADMIN" || this.state.role === "TEACHER" ?
                    <Fab
                        containerStyle={{}}
                        style={{ backgroundColor: '#d97034', opacity: 0.7 }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('CreateClassRoom')}
                    >
                        <Icon type="MaterialIcons" name="add" />
                    </Fab>
                    :
                    null
                }
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
