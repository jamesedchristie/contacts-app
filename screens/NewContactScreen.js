import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { Text, View, TextInput, ImageBackground, TouchableOpacity, Picker, ActivityIndicator } from 'react-native';
import { Styles } from '../Styles'

export default function NewContactView({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dept, setDept] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [depts, setDepts] = useState([]);

    useFocusEffect(
        useCallback(() => {
            fetch('http://localhost:55851/ContactsCRUD.asmx/GetDepartments',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                .then((response) => response.json())
                .then((json) => setDepts(json.d))
                .catch(() => {
                    alert('An error occurred when connecting to the server. Please try again. If error persists please contact the IT Department.');
                    navigation.navigate('Home');
                })
                .finally(() => setLoading(false));
        }, [])
    );

    const saveContact = () => {
        fetch('http://localhost:55851/ContactsCRUD.asmx/InsertNewContact',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
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
            .then(() => alert('New staff contact details added successfully.'))
            .then(() => navigation.navigate('AllContacts'))
            .catch(() => alert('An error occurred when connecting to the server. Please try again. If error persists please contact the IT Department.'));
    }

    const options = depts.map((d, i) => (<Picker.Item label={d} value={i} />));

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Text style={Styles.headerText}>New Contact</Text>
            </ImageBackground>
            <View style={Styles.body}>
                {loading ? <ActivityIndicator /> : (
                    
                        <View style={Styles.contactDisplay}>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>Name: </Text>
                                <TextInput style={Styles.contactInput} value={name} placeholder="Name" onChangeText={(text) => setName(text)} />
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>Phone: </Text>
                                <TextInput style={Styles.contactInput} value={phone} placeholder="Phone" onChangeText={(text) => setPhone(text)} />
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>Department: </Text>
                                <Picker style={Styles.contactInput} selectedValue={dept} onValueChange={(itemValue) => setDept(itemValue)}>
                                    {options}
                                </Picker>
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>Address</Text>
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>Street: </Text>
                                <TextInput style={Styles.contactInput} value={street} placeholder="Street" onChangeText={(text) => setStreet(text)} />
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>City: </Text>
                                <TextInput style={Styles.contactInput} value={city} placeholder="City" onChangeText={(text) => setCity(text)} />
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>State: </Text>
                                <TextInput style={Styles.contactInput} value={state} placeholder="State" onChangeText={(text) => setState(text)} />
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>ZIP: </Text>
                                <TextInput style={Styles.contactInput} value={zip} placeholder="ZIP" onChangeText={(text) => setZip(text)} />
                            </View>
                            <View style={Styles.contactAttributeEdit}>
                                <Text style={Styles.contactKey}>Country: </Text>
                                <TextInput style={Styles.contactInput} value={country} placeholder="Country" onChangeText={(text) => setCountry(text)} />
                            </View>
                        </View> )}
                        <View style={Styles.footer}>
                            <TouchableOpacity style={Styles.button} onPress={saveContact}>
                                <Text style={Styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Home')}>
                                <Text style={Styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                   
            </View>
        </View>

    )
}

{/* <View>
            <Text>New Contact Form</Text>
            <TextInput value={name} placeholder="Name" onChangeText={(text) => setName(text)}/>
            <TextInput value={phone} placeholder="Phone" onChangeText={(text) => setPhone(text)}/>
            <TextInput value={dept} placeholder="Department" onChangeText={(text) => setDept(parseInt(text))}/>
            <TextInput value={street} placeholder="Street" onChangeText={(text) => setStreet(text)}/>
            <TextInput value={city} placeholder="City" onChangeText={(text) => setCity(text)}/>
            <TextInput value={state} placeholder="State" onChangeText={(text) => setState(text)}/>
            <TextInput value={zip} placeholder="ZIP" onChangeText={(text) => setZip(text)}/>
            <TextInput value={country} placeholder="Country" onChangeText={(text) => setCountry(text)}/>
            <Button title="Save" onPress={saveContact}/>
            <Button title="Back" onPress={(e) => navigation.navigate('Home')}/>
        </View> */}