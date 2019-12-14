import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Header, Tab, Tabs, Container, ScrollableTab } from 'native-base';
import Swiper from 'react-native-swiper'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

import Notification from './components/Notification';
import Science from './components/Science';
import Event from './components/Event'


export default class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      btImg: require('../../assets/images/header_img.png'),
      index: 0,
    }
  }

  handleToPage = (index) => {
    this.Swiper.scrollBy(index, true)
  }

  render() {
    const { index } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />
        <View style={{ height: 220, }}>
          <Swiper
            ref={ref => this.Swiper = ref}
            style={{ height: 240, }} showsButtons={true} showsPagination={true} autoplay loop onIndexChanged={(index) => this.setState({ index })}>
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerApp.jpg')}
            />
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerWeb.jpg')}
            />
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerGame.jpg')}
            />
          </Swiper>
        </View>
        <Container >
          <Tabs locked tabBarUnderlineStyle={{ borderBottomWidth: 2 }} renderTabBar={() => <ScrollableTab style={{ height: 50 }} />} >
            <Tab textStyle={{ color: '#fff' }} activeTextStyle={{ color: 'rgba(255, 87, 34, 0.8);' }} tabStyle={{ backgroundColor: '#282828' }}
              activeTabStyle={{ backgroundColor: '#14223C' }}
              heading="Thông báo học vụ">
              <Notification />
            </Tab>
            <Tab textStyle={{ color: '#fff' }} activeTextStyle={{ color: 'rgba(255, 87, 34, 0.8);' }} tabStyle={{ backgroundColor: '#282828' }}
              activeTabStyle={{ backgroundColor: '#14223C' }}
              heading="Sự kiện nổi bật">
              <Event />
            </Tab>
            <Tab textStyle={{ color: '#fff' }} activeTextStyle={{ color: 'rgba(255, 87, 34, 0.8);' }} tabStyle={{ backgroundColor: '#282828' }}
              activeTabStyle={{ backgroundColor: '#14223C' }}
              heading="Khoa học - công nghệ">
              <Science />
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
    top: -58
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
