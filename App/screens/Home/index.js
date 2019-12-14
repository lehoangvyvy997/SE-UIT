import React from 'react';

import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen';
import Hackathon1Screen from '../NewsDetail/Hackathon1';
import Hackathon2Screen from '../NewsDetail/Hackathon2';
import Icon from 'react-native-vector-icons/Ionicons'

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'transparent',
                zIndex: 10,
                paddingTop: 50,
            },
            headerTintColor: '#fff',
            headerTitle: 'Trang Chủ',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'left',
                flex: 1,
                position: 'absolute',
                left: 0
            },
            headerLeft: <Icon
                style={{ paddingLeft: 10, color: 'white' }}
                onPress={() => navigation.openDrawer()}
                name='md-menu'
                size={30}
            />,

        }),
    },
    NewsDetail1: {
        screen: Hackathon1Screen,
        navigationOptions: {
            headerStyle: {
                paddingTop: 20,
            },
            headerTitle: 'Chi tiết',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'left',
                flex: 1,
                position: 'absolute',
                left: 0
            },
        }
    },
    NewsDetail2: {
        screen: Hackathon2Screen,
        navigationOptions: {
            headerStyle: {
                paddingTop: 20,
            },
            headerTitle: 'Chi tiết',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'left',
                flex: 1,
                position: 'absolute',
                left: 0
            },
        }
    }
});