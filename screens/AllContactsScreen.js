import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button, Image, ImageBackground, TouchableOpacity, SectionList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Styles } from '../Styles';

export default function AllContactsView({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [contactsData, setContactsData] = useState([]);
    const [depts, setDepts] = useState([]);

    useFocusEffect(
        useCallback(() => {
            fetch('http://localhost:55851/ContactsCRUD.asmx/GetContacts',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                .then((response) => response.json())
                .then((json) => setContactsData(json.d))
                .catch((error) => console.error(error));


            fetch('http://localhost:55851/ContactsCRUD.asmx/GetDepartments',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                .then((response) => response.json())
                .then((json) => setDepts(json.d))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }, [])
    );

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Image source={require('../assets/ROI_logo_colour.jpg')} style={Styles.logo} />
                <Text style={Styles.headerText}>All Contacts</Text>
                <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('Home')}>
                    <Text style={Styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={Styles.body}>
                {loading ? <ActivityIndicator /> : (
                    <SectionList
                        style={Styles.contactList}
                        sections={depts.map((d, i) => ({ title: d, data: contactsData.filter(c => c.Department == i) }))}
                        renderItem={({ item }) => (
                            <View style={Styles.listContact}>
                                <Text style={Styles.listName}>{item.Name}</Text>
                                <TouchableOpacity style={Styles.listButton} onPress={(e) => navigation.navigate('Contact', {
                                    person: item, depts: depts
                                })}>
                                    <Text style={Styles.buttonText}>View/Update</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        renderSectionHeader={({ section }) => <Text style={Styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                )}
            </View>
        </View>
    );
}

