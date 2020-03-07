import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Card, CardItem, Fab, Thumbnail, Left, Right } from 'native-base';
import axios from 'axios'

import Button from './../components/Button'

export default class ClassRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: undefined,
            classRoom: undefined
        }
    }

    getClassRoom = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                    query ($id: String!) {
                        classRoom(id: $id) {
                            title
                            school{
                                name
                            }
                            createdBy{
                              id
                            }
                        }
                    }
                ` ,
                variables: {
                    id: this.props.route.params.classId
                }
            }
        }).then(res => {
            this.setState({ classRoom: res.data.data.classRoom })
            if(res.data.data.classRoom.createdBy.id === this.props.route.params.userId){
                this.setState({ id: 'CREATED_BY' })
            }
        })
    }

    handleClassHeader = (role) => {
        if(role === 'CREATED_BY'){
            return(
                <CardItem style={{ backgroundColor: 'transparent' }}>
                    <View style={{ backgroundColor: 'transparent', width: '90%', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: "white" }}>{this.state.classRoom.title}</Text>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 10, color: "#a89687" }}>{this.state.classRoom.school.name}</Text>
                    </View>
                    <Icon type='MaterialIcons' name='mode-edit' style={{ paddingLeft: 10, color: 'white' }} onPress={()=>this.props.navigation.navigate('EditClassRoom')}/>
                </CardItem>
            )
        }
        else{
            return(
                <CardItem style={{ backgroundColor: 'transparent' }}>
                    <View style={{ backgroundColor: 'transparent', width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 'bold', color: "white" }}>{this.props.route.params.name}</Text>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 10, color: "#a89687" }}>{this.props.route.params.schoolName}</Text>
                    </View>
                </CardItem>
            )
        }
    }
    
    handleRightHeader = (role, onPress) => {
        if(role === 'CREATED_BY'){
            return(
                <Icon type="MaterialIcons" name="delete" style={{color: '#dbd8d0'}} onPress={onPress}/>
            )
        }
    }
    
    componentDidMount() {
        this.getClassRoom()
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Ruang Kelas',
            headerRight: () => this.handleRightHeader(this.state.id, () => this.props.navigation.goBack()),
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyleApp,
            headerRightContainerStyle: { marginRight: 16 },
        });
        return (
            <Container style={styles.container}>
                <Card style={{ backgroundColor: '#5a9c7d', opacity: 0.3, width: '100%', marginTop: 16 }}>
                        {this.handleClassHeader(this.state.id)}
                </Card>
                <Content style={styles.content}>
                    <Button
                        title={'Papan Tulis'}
                        iconType='FontAwesome5'
                        iconName='object-group'
                        backgroundColor='#aa6cad'
                        onPress={()=>this.props.navigation.navigate('Whiteboard')}
                    />
                    <Button
                        title={'Diskusi'}
                        iconType='FontAwesome5'
                        iconName='users'
                        backgroundColor='#b5b372'
                        onPress={()=>this.props.navigation.navigate('Discussion', {classId: this.props.route.params.classId, userId: this.props.route.params.userId})}
                    />
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
