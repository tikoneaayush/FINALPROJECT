import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
          whats new about javascript 21- WS21
        </Text>
        </View>
        <Image
        source={{
            uri: 'https://www.jaigarhfort.com/wp-content/uploads/2017/03/Hawa-Mahal-Evening-View.jpg'
        }}
        style={styles.cardImage}
        />
        <View>
          <TouchableOpacity
          onPress={ () => openWebsite('https://www.w3schools.com/')}
          >
          <Text style={styles.footerContainer}>Read More</Text>
          </TouchableOpacity>

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
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
      height:400
    },
    bodyContainer:{},
    footerContainer:{
      fontWeight:'bold',
      fontSize:20
    }

})