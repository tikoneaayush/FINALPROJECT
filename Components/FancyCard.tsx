import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri:'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
            }}
            style ={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahhal</Text>
        <Text style={styles.cardLabel}>Pink City </Text>
        <Text style={styles.cardDescrib}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae consectetur corrupti aspernatur nihil dolorem possimus ut velit qui blanditiis tempora, at adipisci. Quibusdam quam architecto nulla non? Illum, at!</Text>
        <Text style={styles.cardFooter}></Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        width:350,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16

    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        color:'#000000',
        elevation:10,
        shadowOffset:{
            width:1,
            height:1
        }

    },
    cardImage:{
        height:180,
        marginBottom:8
    },
    cardBody:{

    },
    cardTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardLabel:{
        fontSize:18
    },
    cardDescrib:{
        fontSize:16
    },
    cardFooter:{
        fontSize:20
    }
})