import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Styles } from '../Styles';

export default function DeleteContactView({ navigation, route }) {
    const { person, depts } = route.params;
    const deleteContact = () => {
        fetch('http://localhost:55851/ContactsCRUD.asmx/DeleteContact',
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
            .then(() => navigation.navigate('AllContacts'))
            .catch(() => alert('An error occurred when connecting to the server. Please try again. If error persists please contact the IT Department.'));
    };
    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Text style={Styles.headerText}>Delete Contact</Text>
            </ImageBackground>
            <View style={Styles.body}>
                <Text style={[Styles.bodyText, { 'textAlign': 'center'}]}>Are you sure you want to permanently delete staff member <Text style={{ 'fontWeight': 'bold' }}>{person.Name}</Text>? <Text style={{ 'color': '#941a1d' }}>{'\n'}This action cannot be undone.</Text></Text>
                <View style={Styles.footer}>
                    <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Contact', { person: person, depts: depts })}>
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