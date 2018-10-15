import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
    return (

        props.items.map((item,i)=>(

            <TouchableOpacity
                onPress={()=> alert('delete')}
                key={i}
                style={styles.listitem}
            >
                 <View>
                    <Text>{item}</Text>
                 </View>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({
    listitem: {
      backgroundColor: '#cecece',
      alignItems: 'center',
      padding: 10,
      width: '100%',
      margin: 5
    }
  });

export default ListItem;