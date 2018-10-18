import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './src/Nav/nav.js';
import Generate from './src/Generator/generate.js';
import ListItem from './src/Generator/listitem.js';
import Input from './src/Input/input.js';


export default class App extends React.Component {

state = {
  nameOfApp: "My awesome app",
  random:[20,13]
}

onAddRandom = () => {
  const random = Math.floor(Math.random() * 100) + 1;
  this.setState(prevState => {
    return{
      random: [...prevState.random,random]
    }
  })
}

onItemDelete = (i) => {
  const newArray = this.state.random.filter((item, index)=> {
    return i !== index;
  });
  this.setState({
    random:newArray
  })
}


  render() {
    return (
      <View style={styles.container}>

        <Nav nameOfApp={this.state.nameOfApp} />
        <Generate add={this.onAddRandom} />

        <ListItem items={this.state.random} delete={this.onItemDelete} />

        <Input />
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  }
});
