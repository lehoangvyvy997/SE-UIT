import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, Platform, ScrollView, SafeAreaView, Dimensions, Alert, Linking } from 'react-native'
import { Container, Card, CardItem, Content, Header, Right, Left, Body, Accordion, Icon } from 'native-base'
import uuidv4 from 'uuid/v4'
import Footer from './../../Footer/index'
import HTML from 'react-native-render-html';
import { TouchableOpacity } from 'react-native-gesture-handler'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

export default class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: true,
            index: 0,
            events: [],
            notification: [],
            scholarship: [],
            science: [],
            about: [],
            news: [
                {
                    id: uuidv4(),
                    img: require('../../../assets/images/manage_img2.png'),
                    title: 'THƯ NGỎ VẬN ĐỘNG TÀI TRỢ CUỘC THI ...',
                },
                {
                    id: uuidv4(),
                    img: require('../../../assets/images/manage_img1.png'),
                    title: 'CHÍNH THỨC PHÁT ĐỘNG CUỘC THI ...',
                }
            ],
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu = function (int) {
        if (this.state.index === int)
            this.setState({ showMenu: !this.state.showMenu })
        else {
            this.setState({ showMenu: !this.state.showMenu })
            this.setState({ index: int })
        }
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

    render() {
        
        return (
            <Container style={styles.container}>
                <ScrollView style={{ backgroundColor: "#e5e5e5" }}>
                    <Text style={styles.textHeader}>Tin Tức Mới Nhất</Text>
                    <Content style={{ marginLeft: 5 }}>
                        <FlatList
                            data={this.state.news}
                            renderItem={({ item }) => (
                                <Card style={{ width: WIDTH_SCREEN / 2.1, paddingLeft: 8, paddingBottom: 8, paddingRight: 8, marginRight: 4 }}>
                                    <CardItem header>
                                        <Image style={{ width: '100%', resizeMode: 'contain' }} source={item.img} />
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Body>
                                            <Text style={{ color: '#FF5722', marginBottom: 8 }}>{item.title}</Text>
                                            <TouchableOpacity onPress={() => { this.props.naviga }}>
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
                        />
                    </Content>
                    <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu(0) }}>
                        <Text style={styles.textHeader}>Sự kiện nổi bật</Text>
                    </TouchableOpacity>
                    <Content style={{ marginTop: 5 }} >
                        {(!this.state.showMenu && this.state.index == 0) ?
                            this.accordion(this.state.events)
                            : null
                        }
                    </Content>
                    <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu(1) }}>
                        <Text style={styles.textHeader}>Thông báo học vụ</Text>
                    </TouchableOpacity>
                    <Content style={{ marginTop: 5 }} >
                        {
                            (!this.state.showMenu && this.state.index == 1) ?
                                this.accordion(this.state.notification)
                                : null
                        }
                    </Content>
                    <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu(2) }}>
                        <Text style={styles.textHeader}>Học bổng tuyển dụng</Text>
                    </TouchableOpacity>
                    <Content style={{ marginTop: 5 }} >
                        {(!this.state.showMenu && this.state.index == 2) ?
                            this.accordion(this.state.scholarship)
                            : null
                        }
                    </Content>
                    <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu(3) }}>
                        <Text style={styles.textHeader}>Khoa học công nghệ</Text>
                    </TouchableOpacity>
                    <Content style={{ marginTop: 5 }} >
                        {(!this.state.showMenu && this.state.index == 3) ?
                            this.accordion(this.state.science)
                            : null
                        }
                    </Content>
                    <TouchableOpacity style={{ backgroundColor: "#fff" }} onPress={() => { this.toggleMenu(4) }}>
                        <Text style={styles.textHeader}>Giới thiệu</Text>
                    </TouchableOpacity>
                    <Content style={{ marginTop: 5 }} >
                        {(!this.state.showMenu && this.state.index == 4) ?
                            this.accordion(this.state.about)
                            : null
                        }
                    </Content>
                    <Footer />
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0
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