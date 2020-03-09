import React, { useState } from 'react'
import {Text, View, Button, TextInput, StyleSheet } from 'react-native'

const Input = props => {
    const [newItem, setNewItem] = useState('')
    const addNewItem = () => {
        setNewItem('')
        props.addItem(newItem)
    }
    return(
        <View>
            <TextInput multiline={true} value={newItem} onChangeText={ txt => setNewItem(txt) } placeholder='Gimme an item man' style={styles.input} />
            <Button title='submit' onPress={ addNewItem }/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        minWidth:'100%',      
        borderColor:'#e6e6ea',
        borderBottomWidth: 1,
        borderColor:'gray',
        marginBottom:12,
        padding:6
    }
  })
  
export default Input
