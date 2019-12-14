import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Header, Tab, Tabs, Container, ScrollableTab } from 'native-base';
import Swiper from 'react-native-swiper'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

import Overview from './components/Overview';
import Organization from './components/Organization';
import Course from './components/Course'


export default class AboutScreen extends Component {
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
            style={{ height: 240, }} showsButtons={true} showsPagination={false} autoplay loop onIndexChanged={(index) => this.setState({ index })}>
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerGame.jpg')}
            />
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerProject.jpg')}
            />
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerWeb.jpg')}
            />
          </Swiper>
        </View>
        <View style={{ height: 50, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.handleToPage(0)}
            style={{ flex: 1, backgroundColor: index === 0 ? '#14223C' : '#282828', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              onPress={() => this.handleToPage(0)}
              style={{
                color: index === 0 ? 'rgba(255, 87, 34, 0.8)' : '#fff',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: 17,
              }}>Tổng quan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleToPage(1)}
            style={{ flex: 1, backgroundColor: index === 1 ? '#14223C' : '#282828', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              onPress={() => this.handleToPage(1)}
              style={{
                color: index === 1 ? 'rgba(255, 87, 34, 0.8)' : '#fff',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: 17,
                justifyContent: 'center'
              }}> Sơ đồ {'\n'}tổ chức</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleToPage(2)}
            style={{ flex: 1, backgroundColor: index === 2 ? '#14223C' : '#282828', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              onPress={() => this.handleToPage(2)}
              style={{
                color: index === 2 ? 'rgba(255, 87, 34, 0.8)' : '#fff',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontSize: 17,
                justifyContent: 'center'
              }}>Chương trình{'\n'}     đào tạo</Text>
          </TouchableOpacity>
        </View>
        <Course />
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

