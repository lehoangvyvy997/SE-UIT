import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, Platform, ScrollView, SafeAreaView, Dimensions, Linking } from 'react-native'
import { Container, Card, CardItem, Content, Header, Right, Left, Body, Accordion } from 'native-base'
import uuidv4 from 'uuid/v4'
import Footer from './../../Footer/index'
import HTML from 'react-native-render-html';

export default class Course extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
    }

    componentDidMount() {
        fetch('https://uitse.000webhostapp.com/api/news/categroup/GT')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    events: data[0].content
                })
            })
            .catch(error => alert("b"));
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <Content style={{ margin: 10 }}>
                        <HTML
                            html={this.state.events}
                            onLinkPress={(event, href) => {
                                Linking.openURL(href)
                            }}
                            imagesMaxWidth={Dimensions.get('window').width / 1.06}
                        />
                    </Content>
                    <Footer />
                </ScrollView>
            </Container>
        )
    }
}
