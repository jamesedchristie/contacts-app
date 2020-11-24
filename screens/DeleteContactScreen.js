import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Styles } from '../Styles';

export default function DeleteContactView({ navigation, route }) {
    const { person, depts } = route.params;
    const deleteContact = () => {
        fetch('http://localhost:50917/ContactsCRUD.asmx/DeleteContact',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': person.Id
                })
            })
            .then(() => alert('Contact information deleted successfully.'))
            .then(() => navigation.navigate('AllContacts'));
    };
    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Image source={require('../assets/ROI_logo_colour.jpg')} style={Styles.logo} />
                <Text style={Styles.headerText}>Staff Contacts</Text>
            </ImageBackground>
            <View style={Styles.body}>
                <Text style={Styles.bodyText}>Are you sure you want to permanently delete staff member {person.Name}? This action cannot be undone.</Text>
                <View style={Styles.footer}>
                    <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('Contact', { person: person, depts: depts })}>
                        <Text style={Styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={deleteContact}>
                        <Text style={Styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}