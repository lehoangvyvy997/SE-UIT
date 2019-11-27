import React from 'react';

import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import ContactScreen from './ContactScreen';

export default createStackNavigator({
    Contact: {
        screen: ContactScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'transparent',
                zIndex: 10,
                paddingTop: 50,
            },
            headerTintColor: '#fff',
            headerTitle: 'Liên hệ',
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