import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card,styles.CardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.Card,styles.CardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.Card,styles.CardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.Card,styles.CardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.Card,styles.CardElevated]}>
            <Text>more</Text>
        </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    Card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        width:100,
        height:100,
        borderRadius: 4,
      
    },
    CardElevated:{
        backgroundColor:'#ABCDEF',
        elevation:400,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#FFFFFF'
    },
    container:{
        padding:8,
        
    }
})