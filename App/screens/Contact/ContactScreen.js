import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, StatusBar, ImageBackground, Image, Dimensions } from 'react-native'
import { Container } from 'native-base'
import Footer from './../Footer/index'

const WIDTH_SCREEN = Dimensions.get('window').width
const HEIGHT_SCREEN = Dimensions.get('window').height

export default class ContactScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.2)" />
                <View style={{ height: 264 }}>
                    <ImageBackground
                        style={styles.wrapHeader}
                        source={require('../../assets/images/header_img.png')}>
                        <Image
                            style={{ alignContent: 'center' }}
                            source={require('../../assets/images/title_logo.png')} />
                        <Text style={{ fontSize: 16, lineHeight: 20, color: '#fff', fontFamily: 'Roboto' }}>Khoa Công Nghệ Phần Mềm</Text>
                    </ImageBackground>
                </View>
                <Container >
                    <ScrollView>
                        <View>
                            <Text style={{ padding: 10, textAlign: 'justify' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor augue sit amet cursus lobortis. Vivamus pulvinar lectus libero, quis rutrum orci bibendum sit amet. Morbi dignissim nunc in dictum congue. Nam ante urna, gravida vitae purus quis, facilisis efficitur ex. Donec posuere varius augue a consectetur. Aliquam dapibus augue lorem, sit amet vestibulum tortor interdum sed. Vivamus a lacus vel elit sollicitudin cursus et ac felis. Vivamus venenatis tortor sit amet commodo volutpat. Nunc tempor, magna non ullamcorper blandit, enim lectus imperdiet lectus, id sagittis tellus metus nec nunc. Praesent et sagittis erat. Nunc feugiat porta placerat. Donec laoreet libero at dolor consectetur tristique. Aliquam dictum elit ut augue ultricies, ut suscipit justo lacinia. Pellentesque lacinia leo faucibus neque consequat, sit amet pretium turpis lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor augue sit amet cursus lobortis. Vivamus pulvinar lectus libero, quis rutrum orci bibendum sit amet. Morbi dignissim nunc in dictum congue. Nam ante urna, gravida vitae purus quis, facilisis efficitur ex. Donec posuere varius augue a consectetur. Aliquam dapibus augue lorem, sit amet vestibulum tortor interdum sed. Vivamus a lacus vel elit sollicitudin cursus et ac felis. Vivamus venenatis tortor sit amet commodo volutpat. Nunc tempor, magna non ullamcorper blandit, enim lectus imperdiet lectus, id sagittis tellus metus nec nunc. Praesent et sagittis erat. Nunc feugiat porta placerat. Donec laoreet libero at dolor consectetur tristique. Aliquam dictum elit ut augue ultricies, ut suscipit justo lacinia. Pellentesque lacinia leo faucibus neque consequat, sit amet pretium turpis lacinia </Text>
                        </View>
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
        top: -60
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