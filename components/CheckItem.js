import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const CheckItem = props => {
    return(
        <TouchableOpacity onPress={()=>props.removeItem(props.id)}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        height:60,
        width:'100%',
        backgroundColor:'green',
        marginBottom:8,
        borderRadius:8,
        padding:8,
        justifyContent:'center',
        alignItems:'center',
      },
      itemText:{
          color:'white',
      }
    })
      
export default CheckItem
