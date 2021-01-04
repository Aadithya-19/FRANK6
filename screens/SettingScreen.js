import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            address: "",
            contact: "",
            docId: "",
        }
    }

    getUserDetails() {
        var email = firebase.auth().currentUser.email
        db.collection('users').where('email_id', '==', email).get().then(
            snapshot => {
                snapshot.forEach(doc => {
                    var data = doc.data(
                        this.setState({ 
                            first_name: data.first_name, 
                            last_name: data.last_name, 
                            address: data.address, 
                            contact: data.contact, 
                            docId: doc.id })
                    )
                })
            }
        )
    }
    updateUserDetail(){
        db.collection('users').doc(this.state.docId).update({
            "first_name": this.state.first_name, 
            "last_name": this.state.last_name, 
            "address": this.state.address, 
            "contact": this.state.contact
            }
        )
        Alert.alert("Profile Updated Successfully");
    }

    componentDidMount(){
        this.getUserDetails()
    }

    render(){
        return(
            <View
            style = {styles.container}>
                    <MyHeader
                        title = "Settings"
                        navigation = {this.props.navigation}
                    />
                    <View style = {styles.formContainer}>
                        <TextInput
                        style = {styles.formTextInput}
                            placeholder = "First Name"
                            onChangeText = {(text) => {
                                this.setState({first_name:text})
                            }}
                            value = {this.state.first_name}
                        />
                         <TextInput
                         style = {styles.formTextInput}
                            placeholder = "Last Name"
                            onChangeText = {(text) => {
                                this.setState({last_name:text})
                            }}
                            value = {this.state.last_name}
                        />
                         <TextInput
                         style = {styles.formTextInput}
                            placeholder = "Contact"
                            keyboardType = {"numeric"}
                            maxLength = {10}
                            onChangeText = {(text) => {
                                this.setState({contact:text})
                            }}
                            value = {this.state.contact}
                        />
                         <TextInput
                         style = {styles.formTextInput}
                            placeholder = "Address"
                            multiline = {true}
                            onChangeText = {(text) => {
                                this.setState({address:text})
                            }}
                            value = {this.state.address}
                        />
                        <TouchableOpacity 
                        style = {styles.button}
                            onPress = {()=>{
                                this.updateUserDetail();
                            }}
                        >
                            <Text
                            style = {styles.buttonText}>
                                Update
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> 
         
        );
    }
}   


const styles = StyleSheet.create({ 
    container : { 
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }, 

    formContainer:{ 
        flex:1, 
        width:'100%', 
        alignItems: 'center' 
    }, 

    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    }, 

    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20 
    }, 
    buttonText:{ 
        fontSize:25, 
        fontWeight:"bold", 
        color:"#fff" 
    } 
})
