import React, { useState, useCallback } from 'react';
import { Text, View, ActivityIndicator, ImageBackground, TouchableOpacity, SectionList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Styles } from '../Styles';

export default function AllContactsView({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [contactsData, setContactsData] = useState([]);
    const [depts, setDepts] = useState([]);
    //const [sortByName, setSortByName] = useState(false);
    //const [sections, setSections] = useState(null);

    useFocusEffect(
        useCallback(() => {
            // if (sortByName) {
            //     setSections(contactsData.filter((value, index, self) => self.indexOf(value) == index)).map(c => ({
            //         title: c, data: contactsData.filter(d => {
            //             var lastName = d.Name.split(' ')[1];
            //             return lastName.startsWith == c;
            //         })
            //     })
            // }

            fetch('http://localhost:55851/ContactsCRUD.asmx/GetContacts',
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                .then((response) => response.json())
                .then((json) => setContactsData(json.d))
                .catch((error) => {
                    console.log(error);
                    alert('An error occurred when connecting to the server. Please try again. If error persists please contact the IT Department.');
                    navigation.navigate('Home');
                });


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
                    alert('An error occurred when connecting to the server. Please try again. If error persists please contact the IT Department.')
                    navigation.navigate('Home');
                })
                .finally(() => setLoading(false));
        }, [])
    );

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/ROI_bg_charcoal.jpg')} style={Styles.header}>
                <Text style={Styles.headerText}>All Contacts</Text>
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Home')}>
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
                                <TouchableOpacity style={Styles.listButton} onPress={() => navigation.navigate('Contact', {
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

function StaffByDept(props) {
    const { depts, contactsData, navigation } = props;
    return (
        <SectionList
            style={Styles.contactList}
            sections={depts.map((d, i) => ({ title: d, data: contactsData.filter(c => c.Department == i) }))}
            renderItem={({ item }) => (
                <View style={Styles.listContact}>
                    <Text style={Styles.listName}>{item.Name}</Text>
                    <TouchableOpacity style={Styles.listButton} onPress={() => navigation.navigate('Contact', {
                        person: item, depts: depts
                    })}>
                        <Text style={Styles.buttonText}>View/Update</Text>
                    </TouchableOpacity>
                </View>
            )}
            renderSectionHeader={({ section }) => <Text style={Styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
        />
    )
}

function StaffByName(props) {
    const { depts, contactsData } = props;
    const letters = contactsData.filter((value, index, self) => self.indexOf(value) == index);
    return (
        <SectionList
            style={Styles.contactList}
            sections={letters.map(c => ({
                title: c, data: contactsData.filter(d => {
                    var lastName = d.Name.split(' ')[1];
                    return lastName.startsWith == c;
                })
            }))}
            renderItem={({ item }) => (
                <View style={Styles.listContact}>
                    <Text style={Styles.listName}>{item.Name}</Text>
                    <TouchableOpacity style={Styles.listButton} onPress={() => navigation.navigate('Contact', {
                        person: item, depts: depts
                    })}>
                        <Text style={Styles.buttonText}>View/Update</Text>
                    </TouchableOpacity>
                </View>
            )}
            renderSectionHeader={({ section }) => <Text style={Styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
        />
    )
}

{/* <SectionList
                        style={Styles.contactList}
                        sections={depts.map((d, i) => ({ title: d, data: contactsData.filter(c => c.Department == i) }))}
                        renderItem={({ item }) => (
                            <View style={Styles.listContact}>
                                <Text style={Styles.listName}>{item.Name}</Text>
                                <TouchableOpacity style={Styles.listButton} onPress={() => navigation.navigate('Contact', {
                                    person: item, depts: depts
                                })}>
                                    <Text style={Styles.buttonText}>View/Update</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        renderSectionHeader={({ section }) => <Text style={Styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    /> */}