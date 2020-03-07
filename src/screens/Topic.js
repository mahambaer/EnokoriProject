import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Card, CardItem, Fab, Thumbnail, Left, Right } from 'native-base';
import axios from 'axios'

import CardTopic from './../components/CardTopic'
import CardPost from './../components/CardPost'
import CardComment from './../components/CardComment'

export default class Topic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: undefined,
            topic: undefined,
            posts: [],
            comments: []
        }
    }

    getTopic = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                query($id: String!){
                    topic(id: $id){
                        title
                        text
                        createdAt
                        createdBy {
                            id
                            firstName
                        }
                        posts {
                            id
                            text
                            createdAt
                            createdBy {
                                firstName
                            }
                            comments {
                                id
                            }
                        }
                    }
                  }
                `,
                variables: {
                    id: this.props.route.params.topicId
                }
            }
        }).then(res => {
            this.setState({ topic: res.data.data.topic, posts: res.data.data.topic.posts })
            if (res.data.data.topic.createdBy.id === this.props.route.params.userId) {
                this.setState({ id: 'CREATED_BY' })
            }
        })
    }

    handleRightHeader = (role, onPress) => {
        if (role === 'CREATED_BY') {
            return (
                <Icon type="MaterialIcons" name="delete" style={{ color: '#dbd8d0' }} onPress={onPress} />
            )
        }
    }

    componentDidMount() {
        this.getTopic()
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Topic',
            headerRight: () => this.handleRightHeader('CREATED_BY', () => this.props.navigation.goBack()),
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyleApp,
            headerRightContainerStyle: { marginRight: 16 },
        });
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    {this.state.topic ?
                        <CardTopic
                            userName={this.state.topic.createdBy.firstName}
                            title={this.state.topic.title}
                            description={this.state.topic.text}
                            datePost={this.state.topic.createdAt}
                        />
                        :
                        null
                    }
                    {this.state.posts.map((item) => {
                        return <CardPost
                            createComment={()=>this.props.navigation.navigate('Post', {postId: item.id})}
                            userName={item.createdBy.firstName}
                            avatar={require('./../assets/img/avatar.png')}
                            datePost={item.createdAt}
                            description={item.text}
                            commentNumber={item.comments.length}
                            key={item.id}
                        />
                    })}
                </Content>
                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: '#d97034', opacity: 0.7 }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('CreatePost')}
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
