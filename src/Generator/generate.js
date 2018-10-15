import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';


const generate = (props) => (

    <TouchableWithoutFeedback 
        onPress={()=> props.add()
        }
        // onLongPress={()=>alert('Touched longer')}
        // onPressIn={()=>alert('Touched')}
        // onPressOut={()=>alert('Touched')}
        // delayLongPress={5000}
    >
        <View style={styles.generate}>
            <Text>Add number</Text>
        </View>
    </TouchableWithoutFeedback>
    
)

const styles = StyleSheet.create({
    generate: {
      backgroundColor: '#00bcd4',
      alignItems: 'center',
      padding: 10,
      width: '100%',
      marginTop: 20,
    }
  });

export default generate;