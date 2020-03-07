import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Card, CardItem, Fab, Thumbnail, Left, Right } from 'native-base';

import SubjectListItem from './../components/SubjectListItem';

export default class Whiteboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        this.props.navigation.setOptions({
            headerTitleAlign: 'center',
            headerTitle: 'Papan Tulis',
            headerTintColor: '#dbd8d0',
            headerStyle: styles.headerStyleApp
        });
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Card style={{ marginTop: 16 }}>
                        <CardItem header bordered>
                            <Text>Daftar Materi</Text>
                        </CardItem>
                        <SubjectListItem 
                            onPress={() => this.props.navigation.navigate('Material')}
                            iconName={'file-powerpoint'}
                            title= {'Test materi pelatihan'}
                        />
                    </Card>
                </Content>
                <Fab
                    containerStyle={{}}
                    style={{ backgroundColor: '#d97034', opacity: 0.7 }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('CreateMaterial')}
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
