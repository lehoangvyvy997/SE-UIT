//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Switch, Right } from 'native-base';
 
export default class CustomSidebarMenu extends Component {
  constructor() {
    super();

    this.state = {
      isToggle: false,
      isSelect: false
    }

    console.log(this.props)

    this.items = [
      {
        key:1,
        navOptionThumb: 'home',
        navOptionName: 'Trang Chủ',
        screenToNavigate: 'Home',
      },
      {
        key:2,
        navOptionThumb: 'envelope', //newspaper
        navOptionName: 'Tin Tức',
        screenToNavigate: 'News',
      },
      {
        key:3,
        navOptionThumb: 'chrome', //kiss-wink-heart
        navOptionName: 'Giới Thiệu',
        screenToNavigate: 'About',
      },
      {
        key:4,
        navOptionThumb: 'list', //wpforms
        navOptionName: 'Biểu Mẫu',
        screenToNavigate: 'Form',
      },
      {
        key:5,
        navOptionThumb: 'book-reader',
        navOptionName: 'Tuyển sinh',
        screenToNavigate: 'Admissions',
      },
      {
        key:6,
        navOptionThumb: 'globe-asia', //person-booth
        navOptionName: 'Liên Hệ',
        screenToNavigate: 'Contact',
      },
    ];

    this.settings = [
      {
        key:7,
        navOptionThumb: 'md-notifications',
        navOptionName: 'Notifications',
        screenToNavigate: 'Notification',
      },
      {
        key:8,
        navOptionThumb: 'question', //md-git-pull-request
        navOptionName: 'Help & Feekback',
        screenToNavigate: 'Help',
      },
    ]
  }
  
  render() {
    console.log(global.currentScreenIndex)
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground
            source={require('../../assets/images/banner.png')}
            style={styles.sideBanner}>
              <Image source={ require('../../assets/images/title_logo.png') } />
              <Text style={ styles.titleBanner }>Khoa Công Nghệ Phần Mềm</Text>
          </ImageBackground>
        </View>
      
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === item.key ? '#e0dbdb' : '#ffffff',
              }}
              key={item.key}>
              <View style={{ marginRight: 20, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color={global.currentScreenIndex === item.key ? '#FF5722' : '#808080'} />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === item.key ? '#FF5722' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = item.key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>

        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />

        <View style={ styles.settings }>
          <Text style={ styles.titleSetting }>Settings</Text>
          {this.settings.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === item.key ? '#e0dbdb' : '#ffffff',
              }}
              key={item.key}>
              <View style={{ marginRight: 20, marginLeft: 20 }}>
                <Icon2 name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === item.key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = item.key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
              {
                item.screenToNavigate == 'NotificationScreen' && <Right ><Switch onValueChange={() => this.setState({ isToggle: !this.state.isToggle })} value={this.state.isToggle}  /></Right>
              }
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  sideBanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
  titleBanner: {
    fontSize: 16,
    lineHeight: 20,
    color: '#fff'
  },
  settings: {
  },
  titleSetting: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20
  }
});