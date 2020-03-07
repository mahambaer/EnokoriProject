import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Card, CardItem, Fab, Thumbnail, Left, Right } from 'native-base';
import axios from 'axios'

import CardTopic from './../components/CardTopic'

export default class Discussion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topics: []
        }
    }

    getTopics = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                query ($id: String!) {
                    classRoom(id: $id) {
                        topics{
                          id
                          title
                          text
                          createdAt
                          createdBy {
                            firstName
                          }
                        }
                      }
                }
                `,
                variables: {
                    id: this.props.route.params.classId
                }
            }
        }).then(res=>{
            this.setState({topics: res.data.data.classRoom.topics})
        })
    }

    componentDidMount(){
        this.getTopics()
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Diskusi',
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyleApp
        });
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                {this.state.topics.map((item)=>
                    <CardTopic
                        key={item.id}
                        onPress={() => this.props.navigation.navigate('Topic', {topicId: item.id, userId: this.props.route.params.userId})}
                        userName={item.createdBy.firstName}
                        datePost={item.createdAt}
                        title={item.title}
                        description={item.text}
                        state={true}
                    />
                )}
                </Content>
                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: '#d97034', opacity: 0.7 }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('CreateTopic')}
                >
                    <Icon type="MaterialIcons" name="add" />
                </Fab>
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
