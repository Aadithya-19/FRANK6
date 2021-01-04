import React,{Component} from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import LogIn from '../screens/LogIn';
import firebase from 'firebase'

export default class CustomSideBarMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems
                        {...this.props}
                    />
                </View>

                <View style={styles.logoutContainer}>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => {
                            this.props.navigation.navigate("LogIn"),
                                firebase.auth().signOut()
                        }}
                    >
                        <Text style={styles.logOutText}>
                            Logout
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8BE85',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerItemsContainer: {
        flex: 0.8,
    },
    logoutContainer: {
        flex: 0.2, 
        justifyContent: 'flex-end', 
        paddingBottom: 30
    },

    logOutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },

    logOutText: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})