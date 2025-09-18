import { title } from 'process';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {View,SafeAreaView,StatusBar,Text, TextInput, StyleSheet, Switch} from 'react-native'
const AddCardScreen = ({navigator}) => {
    return(
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Car Details</Text>
                        <View style={styles.inputsContainer}>
                            <TextInput style={styles.input} placeholder='Card Number'/>
                        </View>
                        <View style={styles.inputsContainer}>
                            <TextInput style={styles.input} placeholder='Cardholder Name'/>
                        </View>
                        <View style={styles.inputsContainer}>
                            <View style={styles.inputLittleContainer}>
                                <TextInput style={styles.inputLittle} placeholder='Expiration Date'/>
                                <TextInput style={styles.inputLittle} placeholder='CVV'/>
                            </View>
                        </View>
                </View>
                <View style={styles.saveCardContainer}>
                    <Text style={styles.saveCardText}> Save Car for future use
                    </Text>
                    <Switch value={'true'}/>
                </View>
                <TouchableOpacity style={styles.addButtom}>
                    <Text style={styles.textButtom}> Add Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
safeAreaContainer:{
    flex:1,
},
container:{

},
titleContainer:{

},
title:{
    fontSize:18,
    fontFamily:'bold'
}





});