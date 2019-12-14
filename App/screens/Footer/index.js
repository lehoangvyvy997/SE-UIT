import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class index extends Component {
    renderImages = (img) => {
        return (
            <Image resizeMode="contain" source={img} style={{ marginBottom: 8, width: Dimensions.get('window').width, height: Dimensions.get('window').height / 14 }} />
        )
    }
    renderImagesPartner = (w, img) => {
        var width = Dimensions.get('window').width / w;
        var height = Dimensions.get('window').height / 14;
        return (
            <Image resizeMode="contain" source={img} style={{ marginRight: 5, width: width, height: height }} />
        )
    }
    render() {
        return (
            <View>
                <View style={{ backgroundColor: "#e5e5e5" }}>
                    <Text style={styles.textHeader}>Liên kết</Text>
                    <View style={styles.image}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.uit.edu.vn/')}>
                            {this.renderImages(require('./../../assets/images/link1.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('http://forum.uit.edu.vn/')}>
                            {this.renderImages(require('./../../assets/images/link2.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://daa.uit.edu.vn/')}>
                            {this.renderImages(require('./../../assets/images/link3.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://phongdl.uit.edu.vn/')}>
                            {this.renderImages(require('./../../assets/images/link4.png'))}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: "#e5e5e5" }}>
                    <Text style={styles.textHeader}>Đối tác</Text>
                    <View style={styles.imgBackground}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.gameloft.com/en/')}>
                            {this.renderImagesPartner(4, require('./../../assets/images/image1.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('http://www.fossil-asia.com/en/hk.html')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image2.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.kms-technology.com/')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image3.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://spiraledge.com/')}>
                            {this.renderImagesPartner(10, require('./../../assets/images/image4.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://teko.vnhome/')}>
                            {this.renderImagesPartner(7, require('./../../assets/images/image5.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.vng.com.vn/')}>
                            {this.renderImagesPartner(11, require('./../../assets/images/image6.png'))}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgBackground}>
                        <TouchableOpacity onPress={() => Linking.openURL('http://athena.studio/')}>
                            {this.renderImagesPartner(5, require('./../../assets/images/image7.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://geekup.vn/')}>
                            {this.renderImagesPartner(8, require('./../../assets/images/image8.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('http://www.fujinet.com.vn/')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image9.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://imba.co/')}>
                            {this.renderImagesPartner(8, require('./../../assets/images/image10.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://youthdev.net/en/')}>
                            {this.renderImagesPartner(7, require('./../../assets/images/image11.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.fpt-software.com/')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image12.png'))}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imgBackground}>
                        <TouchableOpacity onPress={() => Linking.openURL('http://www.lacviet.vn/')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image13.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://larion.com/')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image14.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('http://hinnova.com.vn/')}>
                            {this.renderImagesPartner(5, require('./../../assets/images/image15.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://piksal.com/')}>
                            {this.renderImagesPartner(8, require('./../../assets/images/image16.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.nustechnology.com/')}>
                            {this.renderImagesPartner(9, require('./../../assets/images/image17.png'))}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://kyanon.digital/')}>
                            {this.renderImagesPartner(6, require('./../../assets/images/image18.png'))}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textHeader: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 45,
        marginLeft: 10
    },
    image: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff"
    },
    imgBackground: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff",
        flexDirection: "row"
    }
})