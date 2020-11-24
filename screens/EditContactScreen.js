import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Button, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Styles } from '../Styles';

export default function EditContactView({ navigation, route }) {
    const { person, depts } = route.params;
    const [name, setName] = useState(person.Name);
    const [phone, setPhone] = useState(person.Phone);
    const [dept, setDept] = useState(person.Department);
    const [street, setStreet] = useState(person.Street);
    const [city, setCity] = useState(person.City);
    const [state, setState] = useState(person.State);
    const [zip, setZip] = useState(person.ZIP);
    const [country, setCountry] = useState(person.Country);

    const saveContact = () => {
        fetch('http://localhost:50917/ContactsCRUD.asmx/UpdateContact',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': person.Id,
                    'name': name,
                    'phone': phone,
                    'department': dept,
                    'street': street,
                    'city': city,
                    'state': state,
                    'zip': zip,
                    'country': country
                })
            })
            .then((response) => alert('Staff contact details updated successfully.'))
            .then(() => navigation.navigate('AllContacts'))
    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Image source={require('../assets/ROI_logo_colour.jpg')} style={Styles.logo} />
                <Text style={Styles.headerText}>Edit Contact</Text>
            </ImageBackground>
            <View style={Styles.body}>
                <View style={Styles.contactDisplay}>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Name: </Text>
                        <TextInput style={Styles.contactInput} value={name} placeholder="Name" onChangeText={(text) => setName(text)} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Phone: </Text>
                        <TextInput style={Styles.contactInput} value={phone} placeholder="Phone" onChangeText={(text) => setPhone(text)} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Department: </Text>
                        <TextInput style={Styles.contactInput} value={dept} placeholder="Department" onChangeText={(text) => setDept(parseInt(text))} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Address</Text>
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Street: </Text>
                        <TextInput style={Styles.contactInput} value={street} placeholder="Street" onChangeText={(text) => setStreet(text)} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>City: </Text>
                        <TextInput style={Styles.contactInput} value={city} placeholder="City" onChangeText={(text) => setCity(text)} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>State: </Text>
                        <TextInput style={Styles.contactInput} value={state} placeholder="State" onChangeText={(text) => setState(text)} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>ZIP: </Text>
                        <TextInput style={Styles.contactInput} value={zip} placeholder="ZIP" onChangeText={(text) => setZip(text)} />
                    </View>
                    <View style={Styles.contactAttribute}>
                        <Text style={Styles.contactKey}>Country: </Text>
                        <TextInput style={Styles.contactInput} value={country} placeholder="Country" onChangeText={(text) => setCountry(text)} />
                    </View>
                </View>
                <View style={Styles.footer}>
                    <TouchableOpacity style={Styles.button} onPress={saveContact}>
                        <Text style={Styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.button} onPress={(e) => navigation.navigate('Contact', { person: person, depts: depts })}>
                        <Text style={Styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}