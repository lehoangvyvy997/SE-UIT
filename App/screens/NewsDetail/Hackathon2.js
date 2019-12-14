import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar, ImageBackground, Image, Dimensions, Linking } from 'react-native'
import { Container, Content } from 'native-base'
import Footer from '../Footer/index'
import HTML from 'react-native-render-html'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

export default class NewsDetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hackathon2: {},
        }
    }

    componentDidMount() {
        fetch('https://uitse.000webhostapp.com/api/news/detail/2')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    hackathon2: data.content
                })
            })
            .catch(error => alert("b"));
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Container >
                    <ScrollView>
                        <Content style={{ margin: 10 }}>
                            <HTML
                                html={this.state.hackathon2}
                                onLinkPress={(event, href) => {
                                    Linking.openURL(href)
                                }}
                                imagesMaxWidth={WIDTH_SCREEN / 1.06}
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
        marginTop: 5,
        backgroundColor: '#fff',
        flex: 1,
        position: 'absolute',
        width: WIDTH_SCREEN,
        height: HEIGHT_SCREEN,
    }
})