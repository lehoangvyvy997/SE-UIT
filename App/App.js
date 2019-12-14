import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import AboutStack from './screens/About';
import HomeStack from './screens/Home'
import NewsStack from './screens/News';
import FormStack from './screens/Form';
import AdmissionsStack from './screens/Admissions';
import ContactStack from './screens/Contact';

import NotificationStack from './screens/Notification';
import HelpStack from './screens/Help';

import CustomSideBar from './components/SideBar'

export default class App extends React.Component {

  render() {
    const AppContainer = createAppContainer(AppDrawerNavigation);

    return (
      <AppContainer />
    )
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={require('./assets/images/banner.png')} style={styles.wrapBanner} >
        <Image source={require('./assets/images/title_logo.png')} />
        <Text style={styles.titleBanner}>Khoa Công Nghệ Phần Mềm</Text>
      </ImageBackground>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigation = createDrawerNavigator({
  Home: HomeStack,
  News: NewsStack,
  About: AboutStack,
  Form: FormStack,
  Admissions: AdmissionsStack,
  Contact: ContactStack,
  Notification: NotificationStack,
  Help: HelpStack,
}, {
  contentComponent: CustomSideBar,
  contentOptions: {
    activeTintColor: '#FF5722',
  },
  initialRouteName: 'Home'
})

const styles = StyleSheet.create({
  wrapBanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150
  },
  titleBanner: {
    fontSize: 16,
    lineHeight: 20,
    color: '#fff'
  }
})