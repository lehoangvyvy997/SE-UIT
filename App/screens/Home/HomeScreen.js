import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, FlatList, ScrollView, Linking } from 'react-native'
import { Content, Card, CardItem, Body, Container, ScrollableTab, TabHeading, Accordion, Icon } from 'native-base';
import Swiper from 'react-native-swiper'
import uuidv4 from 'uuid/v4'
import Footer from './../Footer/index'
import HTML from 'react-native-render-html';

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

import App from './components/App';
import Web from './components/Web';
import Manage from './components/Manage'


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // type: 1,
      // btImg: require('../../assets/images/header_img.png'),
      // index: 0,
      showMenu1: true,
      showMenu2: true,
      showMenu3: true,
      showMenu4: true,
      showMenu5: true,
      index: 0,
      events: [],
      notification: [],
      scholarship: [],
      science: [],
      about: [],
      news: [
        {
          id: uuidv4(),
          img: require('../../assets/images/manage_img2.png'),
          title: 'THƯ NGỎ VẬN ĐỘNG TÀI TRỢ CUỘC THI ...',
        },
        {
          id: uuidv4(),
          img: require('../../assets/images/manage_img1.png'),
          title: 'CHÍNH THỨC PHÁT ĐỘNG CUỘC THI ...',
        }
      ],
    }
    // this.toggleMenu = this.toggleMenu.bind(this);
  }
  // changeBackround = (type) => {
  //   this.setState({
  //     type
  //   })
  //   if (type === 1) {
  //     this.setState({
  //       btImg: require('../../assets/images/header_img.png')
  //     })
  //   }
  //   else if (type === 2) {
  //     this.setState({
  //       btImg: require('../../assets/images/banner.jpg')
  //     })
  //   }
  //   else {
  //     this.setState({
  //       btImg: require('../../assets/images/title_logo.png')
  //     })
  //   }
  // }
  toggleMenu1 = function () {
    this.setState({ showMenu1: !this.state.showMenu1 })
  }
  toggleMenu2 = function () {
    this.setState({ showMenu2: !this.state.showMenu2 })
  }
  toggleMenu3 = function () {
    this.setState({ showMenu3: !this.state.showMenu3 })
  }
  toggleMenu4 = function () {
    this.setState({ showMenu4: !this.state.showMenu4 })
  }
  toggleMenu5 = function () {
    this.setState({ showMenu5: !this.state.showMenu5 })
  }

  accordion = (event) => {
    return (
      // (!this.state.showMenu && this.state.index == 0) ?
      <Accordion
        dataArray={event}
        headerStyle={{ backgroundColor: "#fff", fontWeight: 'bold' }}
        animation={true}
        expanded={true}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
      // : null
    )
  }

  componentDidMount() {
    // this.setState({events:[]})
    fetch('https://uitse.000webhostapp.com/api/news/SKNB')
      .then(data => data.json())
      .then(data => {
        // const dt=            {
        //     title: 'Sự kiện nổi bật',
        //     content: data.toString()
        // }
        // const arr= this.state.events;
        // arr.push(dt);
        this.setState({
          events: data
        })
      })
      .catch(error => alert("b"));
    // // alert('a')
    // var arr =[]
    // arr= this.state.events
    // alert(this.state.events)
    fetch('https://uitse.000webhostapp.com/api/news/TBHV')
      .then(data => data.json())
      .then(data => {
        this.setState({
          notification: data
        })
      })
      .catch(error => alert("b"));
    fetch('https://uitse.000webhostapp.com/api/news/HB-TD')
      .then(data => data.json())
      .then(data => {
        this.setState({
          scholarship: data
        })
      })
      .catch(error => alert("b"));
    fetch('https://uitse.000webhostapp.com/api/news/KH-CN')
      .then(data => data.json())
      .then(data => {
        this.setState({
          science: data
        })
      })
      .catch(error => alert("b"));
    fetch('https://uitse.000webhostapp.com/api/news/GT')
      .then(data => data.json())
      .then(data => {
        this.setState({
          about: data
        })
      })
      .catch(error => alert("b"));
  }

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff"
      }}>
        <Text style={{ fontStyle: 'normal', fontFamily: 'Roboto', fontSize: 16, fontWeight: "bold" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 20 }} name="angle-up" type="FontAwesome" />
          : <Icon style={{ fontSize: 20 }} name="angle-down" type="FontAwesome" />}
      </View>
    );
  }

  // bat debug đt control m mo chrome bam ctrol o
  // render html
  _renderContent = ({ content }) => {
    return (
      <View style={{ backgroundColor: "#e5e5e5", padding: 10 }}>
        <HTML
          html={content}
          onLinkPress={(event, href) => {
            Linking.openURL(href)
          }}
          imagesMaxWidth={WIDTH_SCREEN / 1.05}
        // imagesInitialDimensions={{ width: 100, height: 100 }}
        />
      </View>
    )
  }

  handleToPage = (index) => {
    this.Swiper.scrollBy(index, true)
  }
  render() {
    const { navigate } = this.props.navigation

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
              source={require('../../assets/images/bannerApp.jpg')}
            />
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerWeb.jpg')}
            />
            <ImageBackground
              style={{ width: WIDTH_SCREEN, height: 220 }}
              source={require('../../assets/images/bannerProject.jpg')}
            />
          </Swiper>
        </View>
        <View style={{ height: 50, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => this.handleToPage(0)}
            style={{ flex: 1, backgroundColor: index === 0 ? '#14223C' : '#282828', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              onPress={() => this.handleToPage(0)}
              style={{ color: index === 0 ? 'rgba(255, 87, 34, 0.8)' : '#fff', fontFamily: 'Roboto', fontStyle: 'normal', fontSize: 17 }}
            > Lập trình {'\n'}ứng dụng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleToPage(1)}
            style={{ flex: 1, backgroundColor: index === 1 ? '#14223C' : '#282828', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              onPress={() => this.handleToPage(1)}
              style={{ color: index === 1 ? 'rgba(255, 87, 34, 0.8)' : '#fff', fontFamily: 'Roboto', fontStyle: 'normal', fontSize: 17 }}
            >Lập trình {'\n'}    web</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleToPage(2)}
            style={{ flex: 1, backgroundColor: index === 2 ? '#14223C' : '#282828', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              onPress={() => this.handleToPage(2)}
              style={{ color: index === 2 ? 'rgba(255, 87, 34, 0.8)' : '#fff', fontFamily: 'Roboto', fontStyle: 'normal', fontSize: 17 }}
            >Quản lý {'\n'}  dự án</Text>
          </TouchableOpacity>
        </View>
        <Container>
          <ScrollView style={{ backgroundColor: "#e5e5e5" }}>
            <Text style={styles.textHeader}>Tin Tức Mới Nhất</Text>
            <Content style={{ marginLeft: 0 }}>
              {/* <FlatList
                data={this.state.news}
                renderItem={({ item }) => (
                  <Card style={{ width: WIDTH_SCREEN / 2.1, paddingLeft: 8, paddingBottom: 8, paddingRight: 8, marginRight: 4 }}>
                    <CardItem header>
                      <Image style={{ width: '100%', resizeMode: 'contain' }} source={item.img} />
                    </CardItem>
                    <CardItem cardBody>
                      <Body>
                        <Text style={{ color: '#FF5722', marginBottom: 8 }}>{item.title}</Text>
                        <TouchableOpacity onPress={() => { navigate('NewsDetail', { id: '30' }) }}>
                          <Text>Read more</Text>
                        </TouchableOpacity>
                      </Body>
                    </CardItem>
                  </Card>
                )}
                // keyExtractor={item => item.id}
                // // extraData={selected}
                horizontal
              // pagingEnabled={true}
              // showsHorizontalScrollIndicator={false}
              // legacyImplementation={false}
              // renderScrollComponent={(props) => (<ScrollView {...props} />)}
              /> */}
              <View style={{ flex: 1, flexDirection: 'row', margin: 5, backgroundColor: "#e5e5e5" }}>
                <View style={{ height: HEIGHT_SCREEN / 4, flex: 1, margin: 3, backgroundColor: "#fff" }}>
                  <Image style={{ resizeMode: 'cover', alignSelf: 'center' }} source={require('../../assets/images/manage_img2.png')} />
                  <Text style={{ color: '#FF5722', marginLeft: 10, marginBottom: 5, fontFamily: 'Roboto' }}>THƯ NGỎ VẬN ĐỘNG TÀI TRỢ CUỘC THI ...</Text>
                  <TouchableOpacity onPress={() => { navigate('NewsDetail1', { id: '1' }) }}>
                    <Text style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontSize: 14, lineHeight: 20, marginLeft: 10 }}>Read more</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ height: HEIGHT_SCREEN / 4, flex: 1, margin: 3, backgroundColor: "#fff" }}>
                  <Image style={{ resizeMode: 'cover', alignSelf: 'center' }} source={require('../../assets/images/manage_img1.png')} />
                  <Text style={{ color: '#FF5722', marginLeft: 10, marginBottom: 5, fontFamily: 'Roboto' }}>CHÍNH THỨC PHÁT ĐỘNG CUỘC THI ...</Text>
                  <TouchableOpacity onPress={() => { navigate('NewsDetail2', { id: '2' }) }}>
                    <Text style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontSize: 14, lineHeight: 20, marginLeft: 10 }}>Read more</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Content>
            <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu1() }}>
              <Text style={styles.textHeader}>Sự kiện nổi bật</Text>
            </TouchableOpacity>
            <Content style={{ marginTop: 5 }} >
              {(!this.state.showMenu1) ?
                this.accordion(this.state.events)
                : null
              }
            </Content>
            <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu2() }}>
              <Text style={styles.textHeader}>Thông báo học vụ</Text>
            </TouchableOpacity>
            <Content style={{ marginTop: 5 }} >
              {
                (!this.state.showMenu2) ?
                  this.accordion(this.state.notification)
                  : null
              }
            </Content>
            <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu3() }}>
              <Text style={styles.textHeader}>Học bổng tuyển dụng</Text>
            </TouchableOpacity>
            <Content style={{ marginTop: 5 }} >
              {(!this.state.showMenu3) ?
                this.accordion(this.state.scholarship)
                : null
              }
            </Content>
            <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu4() }}>
              <Text style={styles.textHeader}>Khoa học công nghệ</Text>
            </TouchableOpacity>
            <Content style={{ marginTop: 5 }} >
              {(!this.state.showMenu4) ?
                this.accordion(this.state.science)
                : null
              }
            </Content>
            <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu5() }}>
              <Text style={styles.textHeader}>Giới thiệu</Text>
            </TouchableOpacity>
            <Content style={{ marginTop: 5 }} >
              {(!this.state.showMenu5) ?
                this.accordion(this.state.about)
                : null
              }
            </Content>
            <Footer />
          </ScrollView>
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
  },
  textHeader: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 45,
    marginLeft: 10
  }
})
