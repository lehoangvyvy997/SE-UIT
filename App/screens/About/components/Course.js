import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, Platform, ScrollView, SafeAreaView } from 'react-native'
import { Container, Card, CardItem, Content, Header, Right, Left, Body, Accordion } from 'native-base'
import uuidv4 from 'uuid/v4'
import Footer from './../../Footer/index'

export default class Course extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    <View>
                        <Text style={{padding:10, textAlign: 'justify'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor augue sit amet cursus lobortis. Vivamus pulvinar lectus libero, quis rutrum orci bibendum sit amet. Morbi dignissim nunc in dictum congue. Nam ante urna, gravida vitae purus quis, facilisis efficitur ex. Donec posuere varius augue a consectetur. Aliquam dapibus augue lorem, sit amet vestibulum tortor interdum sed. Vivamus a lacus vel elit sollicitudin cursus et ac felis. Vivamus venenatis tortor sit amet commodo volutpat. Nunc tempor, magna non ullamcorper blandit, enim lectus imperdiet lectus, id sagittis tellus metus nec nunc. Praesent et sagittis erat. Nunc feugiat porta placerat. Donec laoreet libero at dolor consectetur tristique. Aliquam dictum elit ut augue ultricies, ut suscipit justo lacinia. Pellentesque lacinia leo faucibus neque consequat, sit amet pretium turpis lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor augue sit amet cursus lobortis. Vivamus pulvinar lectus libero, quis rutrum orci bibendum sit amet. Morbi dignissim nunc in dictum congue. Nam ante urna, gravida vitae purus quis, facilisis efficitur ex. Donec posuere varius augue a consectetur. Aliquam dapibus augue lorem, sit amet vestibulum tortor interdum sed. Vivamus a lacus vel elit sollicitudin cursus et ac felis. Vivamus venenatis tortor sit amet commodo volutpat. Nunc tempor, magna non ullamcorper blandit, enim lectus imperdiet lectus, id sagittis tellus metus nec nunc. Praesent et sagittis erat. Nunc feugiat porta placerat. Donec laoreet libero at dolor consectetur tristique. Aliquam dictum elit ut augue ultricies, ut suscipit justo lacinia. Pellentesque lacinia leo faucibus neque consequat, sit amet pretium turpis lacinia </Text>
                    </View>
                    <Footer/>
                </ScrollView>
            </Container>
        )
    }
}
