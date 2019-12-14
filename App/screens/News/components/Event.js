import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native'
import Footer from './../../Footer/index'
import { Container, Accordion, Icon, Content } from 'native-base'
import HTML from 'react-native-render-html'

export default class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
        }
    }

    componentDidMount() {
        fetch('https://uitse.000webhostapp.com/api/news/categroup/SKNB')
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
                    imagesMaxWidth={Dimensions.get('window').width / 1.055}
                />
            </View>
        )
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <Content style={{ marginTop: 5 }}>
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
        )
    }
}
