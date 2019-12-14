import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar, ImageBackground, Image, Dimensions, Linking } from 'react-native'
import { Container, Content, Accordion, Icon } from 'native-base'
import Footer from './../Footer/index'
import HTML from 'react-native-render-html'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

export default class NotificationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
    }

    componentDidMount() {
        fetch('https://uitse.000webhostapp.com/api/news/categroup/TBHV')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    events: data
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

    _renderContent = ({ content }) => {
        return (
            <View style={{ backgroundColor: "#e5e5e5", padding: 10 }} >
                <HTML
                    html={content}
                    onLinkPress={(event, href) => {
                        Linking.openURL(href)
                    }}
                    imagesMaxWidth={WIDTH_SCREEN / 1.06}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />
                <View style={{ height: 220 }}>
                    <ImageBackground
                        style={styles.wrapHeader}
                        source={require('../../assets/images/bannerAdmission.jpg')}>
                        <Image
                            style={{ alignContent: 'center' }}
                            source={require('../../assets/images/title_logo.png')} />
                        <Text style={{ fontSize: 16, lineHeight: 20, color: '#fff', fontFamily: 'Roboto' }}>Khoa Công Nghệ Phần Mềm</Text>
                    </ImageBackground>
                </View>
                <Container >
                    <ScrollView>
                        <Content style={{ margin: 5 }}>
                            <Accordion
                                dataArray={this.state.events}
                                headerStyle={{ backgroundColor: "#fff", fontWeight: 'bold' }}
                                animation={true}
                                expanded={false}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                            />
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
        marginTop: 12,
        backgroundColor: '#fff',
        flex: 1,
        position: 'absolute',
        width: WIDTH_SCREEN,
        height: HEIGHT_SCREEN,
        top: -68
    },
    wrapHeader: {
        width: '100%',
        height: 240,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'linear-gradient(0deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34)), linear-gradient(180deg, rgba(0, 0, 0, 4e-05) 0%, rgba(0, 0, 0, 0.048) 30%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.3) 90%, rgba(0, 0, 0, 0.352) 96.25%, rgba(0, 0, 0, 0.4) 100%)'
    }
})
