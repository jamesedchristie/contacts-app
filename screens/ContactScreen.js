import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Styles } from '../Styles';

export default function ContactView({ navigation, route }) {
    const { person, depts } = route.params;

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Text style={Styles.headerText}>Staff Details</Text>
                <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('AllContacts')}>
                    <Text style={Styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={Styles.body}>
                <View style={Styles.contactDisplay}>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Name: </Text><Text style={Styles.contactValue}>{person.Name}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Phone: </Text><Text style={Styles.contactValue}>{person.Phone}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Department: </Text><Text style={Styles.contactValue}>{depts[parseInt(person.Department)]}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Address</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Street: </Text><Text style={Styles.contactValue}>{person.Street}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>City: </Text><Text style={Styles.contactValue}>{person.City}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>State: </Text><Text style={Styles.contactValue}>{person.State}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>ZIP: </Text><Text style={Styles.contactValue}>{person.ZIP}</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Country: </Text><Text style={Styles.contactValue}>{person.Country}</Text>
                    </View>
                </View>
                <View style={Styles.footer}>
                    <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('EditContact', {
                        person: person, depts: depts
                    })}>
                        <Text style={Styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('DeleteContact', {
                        person: person, depts: depts
                    })}>
                        <Text style={Styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}