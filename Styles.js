import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#262626',
        fontFamily: 'trebuc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 100,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: 150,
        height: 150 * 0.52,
    },
    headerText: {
        color: '#fff',     
        fontFamily: 'trebuc',        
        fontSize: 21,
    },
    body: {
        padding: 10,
        paddingTop: 40,
        flex: 6,        
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    bodyText: {
        color: '#262626',
        fontFamily: 'trebuc',
        fontSize: 18
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#941a1d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: '#fff',       
        fontFamily: 'trebuc',
        fontSize: 18,
    },
    contactList: {
        flex: 1,
        alignSelf: 'stretch',
    },
    listContact: {
        flexDirection: 'row',
        margin: 15,
        padding: 5,
    },
    listName: {
        flex: 1,
        color: '#262626',
        fontFamily: 'trebuc',
        fontSize: 18
    },
    listButton: {
        flex: 1,
        backgroundColor: '#941a1d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#262626',
        fontFamily: 'trebuc',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    contactDisplay: {
        alignSelf: 'stretch',
        //justifyContent: 'space-evenly'        
    },
    contactAttribute: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    contactAttributeEdit: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    contactKey: {        
        fontSize: 18,
        fontWeight: 'bold',
        color: '#941a1d',
        fontFamily: 'trebuc',
    },
    contactValue: {        
        fontSize: 18,
        color: '#262626',
        fontFamily: 'trebuc',
    },
    contactInput: {        
        fontSize: 18,
        color: '#262626',
        fontFamily: 'trebuc',
        backgroundColor: '#eee',
        borderRadius: 3,
        borderColor: '#262626',
        borderWidth: 1,
        margin: 10,
        padding: 5,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})