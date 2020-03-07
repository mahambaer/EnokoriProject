import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './../screens/Login'
import Register from './../screens/Register'
import Home from './../screens/Home'
import StudentRegister from './../screens/StudentRegister'
import TeacherRegister from './../screens/TeacherRegister'
import ClassRoom from './../screens/ClassRoom'
import Whiteboard from './../screens/Whiteboard'
import Discussion from './../screens/Discussion'
import Topic from './../screens/Topic'
import Material from './../screens/Material'
import CreateClassRoom from './../screens/CreateClassRoom'
import CreateMaterial from './../screens/CreateMaterial'
import CreatePost from './../screens/CreatePost'
import CreateTopic from './../screens/CreateTopic'
import CreateComment from './../screens/CreateComment'
import EditClassRoom from './../screens/EditClassRoom'
import EditUser from './../screens/EditUser'
import Post from './../screens/Post'

const Stack = createStackNavigator()

const RouteNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Student" component={StudentRegister} />
                <Stack.Screen name="Teacher" component={TeacherRegister} />
                <Stack.Screen name="ClassRoom" component={ClassRoom} />
                <Stack.Screen name="Whiteboard" component={Whiteboard} />
                <Stack.Screen name="Discussion" component={Discussion} />
                <Stack.Screen name="Topic" component={Topic} />
                <Stack.Screen name="Material" component={Material} />
                <Stack.Screen name="CreateClassRoom" component={CreateClassRoom} />
                <Stack.Screen name="CreateMaterial" component={CreateMaterial} />
                <Stack.Screen name="CreatePost" component={CreatePost} />
                <Stack.Screen name="CreateTopic" component={CreateTopic} />
                <Stack.Screen name="CreateComment" component={CreateComment} />
                <Stack.Screen name="EditClassRoom" component={EditClassRoom} />
                <Stack.Screen name="EditUser" component={EditUser} />
                <Stack.Screen name="Post" component={Post} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteNavigation
