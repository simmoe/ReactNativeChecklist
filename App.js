import React, {useState} from 'react'
import {Text, View, StyleSheet, ScrollView } from 'react-native'
import Input from './components/Input'
import CheckItem from './components/CheckItem'

const App = () => {
  const [items,setItems] = useState([])

  const addItem = item => {
    console.log('adding item: ', item)
    setItems([...items, item])
  }

  const removeItem = id => {
    console.log('removing item with id: ', id)
    setItems( items.filter( (item, index) => index != id ) )
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Huskeliste</Text>
      </View>
      <View style={styles.input}>
          <Input addItem={addItem} />
      </View>
      <View style={styles.items}>
        <ScrollView>
        {
          items.map( (item, index) => 
            <CheckItem key={index} id={index} item={item} removeItem={removeItem} />
          )
        }
        </ScrollView>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    alignItems:'stretch',
    flexDirection:'column'
  },
  header:{
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4285F4',
    paddingTop:24,
  },
  title:{
    fontSize:24,
    color:'white',
  },
  input:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    padding:24,
  },
  items:{
    flex:3,
    paddingTop:24,
    padding:12,
  },
})

export default App