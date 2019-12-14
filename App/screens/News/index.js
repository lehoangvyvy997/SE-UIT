import React from 'react';

import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import NewsScreen from './NewsScreen';

export default createStackNavigator({
    News: {
        screen: NewsScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: 'transparent',
                zIndex: 10,
                paddingTop: 50,
            },
            headerTintColor: '#fff',
            headerTitle: 'Tin tức',
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