import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Card, CardItem, Fab, Thumbnail, Left, Right } from 'native-base';
import axios from 'axios'

import CardTopic from './../components/CardTopic'
import CardPost from './../components/CardPost'
import CardComment from './../components/CardComment'

export default class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: undefined,
            post: undefined,
            comments: []
        }
    }

    getPost = () => {
        axios({
            url: 'https://enokori1583416514055.mejik.id/graphql',
            method: 'POST',
            data: {
                query: `
                query($id: String!){
                    post(id: $id){
                        id
                        text
                        createdAt
                        createdBy {
                            firstName
                        }
                        comments {
                            id
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
                    id: this.props.route.params.postId
                }
            }
        }).then(res => {
            this.setState({ post: res.data.data.post, comments: res.data.data.post.comments })
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
        this.getPost()
    }

    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Post',
            headerRight: () => this.handleRightHeader('CREATED_BY', () => this.props.navigation.goBack()),
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyleApp,
            headerRightContainerStyle: { marginRight: 16 },
        });
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    {this.state.post ?
                        <CardPost
                            createComment={() => this.props.navigation.navigate('CreateComment')}
                            userName={this.state.post.createdBy.firstName}
                            avatar={require('./../assets/img/avatar.png')}
                            datePost={this.state.post.createdAt}
                            description={this.state.post.text}
                            commentNumber={this.state.comments.length}
                        />
                        :
                        null
                    }
                    {this.state.comments.map((item) => {
                        return <CardComment
                            userName={item.createdBy.firstName}
                            avatar={require('./../assets/img/avatar.png')}
                            datePost={item.createdAt}
                            description={item.text}
                        />
                    })}
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
