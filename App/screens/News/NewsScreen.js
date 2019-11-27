import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, ImageBackground } from 'react-native'
import { Header, Tab, Tabs, Container, ScrollableTab } from 'native-base';

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

import App from './components/Notification';
import Web from './components/Scholarship';
import Manage from './components/Event'


export default class NewsScreen extends Component {
  render() {
    return (
      <View style={ styles.container }>
       <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />
        <View style={{ height: 264 }}>
          <ImageBackground 
            style={ styles.wrapHeader } 
            source={require('../../assets/images/header_img.png')}>
              <Image 
                style={{ alignContent: 'center' }} 
                source={require('../../assets/images/title_logo.png')} />
                <Text style={{ fontSize: 16, lineHeight: 20, color: '#fff', fontFamily: 'Roboto' }}>Khoa Công Nghệ Phần Mềm</Text>
            </ImageBackground>
          
        </View>
        <Container >

          <Tabs  locked tabBarUnderlineStyle={{borderBottomWidth:2}} renderTabBar={() => <ScrollableTab style={{ height: 70 }} />} >
            <Tab 
              textStyle={{ color: '#fff' }} 
              activeTextStyle={{ color: 'rgba(255, 87, 34, 0.8);' }} 
              tabStyle={{ backgroundColor: '#282828' }} 
              activeTabStyle={{ backgroundColor: '#14223C' }} 
              heading="Thông báo học vụ">
              <App />
            </Tab>
            <Tab textStyle={{ color: '#fff' }} activeTextStyle={{ color: 'rgba(255, 87, 34, 0.8);' }} tabStyle={{ backgroundColor: '#282828' }} activeTabStyle={{ backgroundColor: '#14223C' }} heading="Học bổng tuyển dụng">
              <Web />
            </Tab>
            <Tab textStyle={{ color: '#fff' }} activeTextStyle={{ color: 'rgba(255, 87, 34, 0.8);' }} tabStyle={{ backgroundColor: '#282828' }} activeTabStyle={{ backgroundColor: '#14223C' }} heading="Sự kiện nổi bật">
              <Manage />
            </Tab>
          </Tabs>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'absolute',
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    top: -60
  },
  wrapHeader: {
    width: '100%', 
    height: 264, 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'linear-gradient(0deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34)), linear-gradient(180deg, rgba(0, 0, 0, 4e-05) 0%, rgba(0, 0, 0, 0.048) 30%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.3) 90%, rgba(0, 0, 0, 0.352) 96.25%, rgba(0, 0, 0, 0.4) 100%)'
  }
})
