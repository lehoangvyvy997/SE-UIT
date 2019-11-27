import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, Platform, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { Container, Card, CardItem, Content, Header, Right, Left, Body, Accordion } from 'native-base'
import uuidv4 from 'uuid/v4'
import Footer from './../../Footer/index'
export default class Manage extends Component {
    state = {
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
            },
            {
                id: uuidv4(),
                img: require('../../../assets/images/manage_img1.png'),
                title: 'CHÍNH THỨC PHÁT ĐỘNG CUỘC THI ...',
            },
            {
                id: uuidv4(),
                img: require('../../../assets/images/manage_img1.png'),
                title: 'CHÍNH THỨC PHÁT ĐỘNG CUỘC THI ...',
            }
        ],
        events: [
            {
                title: 'Sự kiện nổi bật',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining`
            },
            {
                title: 'Thông báo học vụ',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining`
            },
            {
                title: 'Học bổng tuyển dụng',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining`
            },
            {
                title: 'Khoa học - Công nghệ',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining`
            },
            {
                title: 'Giới Thiệu',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining`
            }
        ]
    }

    render() {
        return (
            <Container style={styles.container}>
                <ScrollView>
                    <Text style={styles.textNews}>Tin Tức Mới Nhất</Text>

                    <Content style={{ marginLeft: 8 }}>
                        <FlatList
                            data={this.state.news}
                            renderItem={({ item }) => (
                                <Card style={{ width: 180, paddingLeft: 8, paddingBottom: 8, paddingRight: 8, marginRight: 4 }}>
                                    <CardItem header>
                                        <Image style={{ width: '100%', resizeMode: 'contain' }} source={item.img} />
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Body>
                                            <Text style={{ color: '#FF5722', marginBottom: 8 }}>{item.title}</Text>
                                            <Text>Read more</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            )}
                            keyExtractor={item => item.id}
                            // extraData={selected}
                            horizontal
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            legacyImplementation={false}
                            renderScrollComponent={(props) => (<ScrollView {...props} />)}
                        />
                    </Content>
                    <Content padder>
                        <Accordion dataArray={this.state.events} expanded={0} />
                    </Content>
                    <Footer/>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12
    },
    textNews: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        marginLeft: 16
    }
})
