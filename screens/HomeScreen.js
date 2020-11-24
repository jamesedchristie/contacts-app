import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../Styles';

export default function Home({ navigation }) {
    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Image source={require('../assets/ROI_logo_colour.jpg')} style={Styles.logo} />
                <Text style={Styles.headerText}>Staff Contacts</Text>
            </ImageBackground>
            <View style={Styles.body}>
                <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('AllContacts')}>
                    <Text style={Styles.buttonText}>View All Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} title="Add New Contact" onPress={(e) => navigation.navigate('NewContact')}>
                    <Text style={Styles.buttonText}>Add New Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}