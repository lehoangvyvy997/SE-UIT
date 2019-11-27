import React from 'react';

import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen';
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
                textAlign: 'center',
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
    }
});