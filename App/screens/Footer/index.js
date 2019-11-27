import React, { Component } from 'react'
import { Text, View,Image,Dimensions } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: 10, backgroundColor: "#e5e5e5" }}>
                    <Text style={{ margin: 10 }}>Liên kết</Text>
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, backgroundColor: "#fff" }}>
                        <Image resizeMode="contain" source={require('./../../assets/images/link1.png')} style={{ marginBottom: 8, width: Dimensions.get('window').width - 20, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/link2.png')} style={{ marginBottom: 8, width: Dimensions.get('window').width - 20, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/link3.png')} style={{ marginBottom: 8, width: Dimensions.get('window').width - 20, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/link4.png')} style={{ marginBottom: 8, width: Dimensions.get('window').width - 20, height: Dimensions.get('window').height / 14 }} />
                    </View>
                </View>
                <View style={{ marginTop: 10, backgroundColor: "#e5e5e5" }}>
                    <Text style={{ margin: 10 }}>Đối tác</Text>
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, backgroundColor: "#fff", flexDirection: "row" }}>
                        <Image resizeMode="contain" source={require('./../../assets/images/image1.png')} style={{ marginRight: 5, width: Dimensions.get('window').width / 4, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image2.png')} style={{ marginRight: 5, width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image3.png')} style={{ marginRight: 5, width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image4.png')} style={{ width: Dimensions.get('window').width / 9, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image5.png')} style={{ width: Dimensions.get('window').width / 7, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image6.png')} style={{ width: Dimensions.get('window').width / 9, height: Dimensions.get('window').height / 14 }} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, backgroundColor: "#fff", flexDirection: "row" }}>
                        <Image resizeMode="contain" source={require('./../../assets/images/image7.png')} style={{ width: Dimensions.get('window').width / 5, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image8.png')} style={{ width: Dimensions.get('window').width / 8, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image9.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image10.png')} style={{ width: Dimensions.get('window').width / 8, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image11.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image12.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 10, backgroundColor: "#fff", flexDirection: "row" }}>
                        <Image resizeMode="contain" source={require('./../../assets/images/image13.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image14.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image15.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image16.png')} style={{ width: Dimensions.get('window').width / 7, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image17.png')} style={{ width: Dimensions.get('window').width / 7, height: Dimensions.get('window').height / 14 }} />
                        <Image resizeMode="contain" source={require('./../../assets/images/image18.png')} style={{ width: Dimensions.get('window').width / 6, height: Dimensions.get('window').height / 14 }} />
                    </View>
                </View>
            </View>
        )
    }
}
