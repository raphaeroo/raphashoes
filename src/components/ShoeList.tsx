import React from 'react'
import { View, Dimensions, Image, StyleSheet, Text } from 'react-native'

const { width } = Dimensions.get('window')

interface ShoeListProps {
  imageUri: string;
  shoesName: string;
  shoesValue: string;
}

export const ShoeList: React.FC<ShoeListProps> = ({ imageUri, shoesName, shoesValue }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('~/assets/1.png')}
        style={styles.img}
      />
      <Text style={styles.shoeName}>Nike</Text>
      <Text style={styles.shoeValue}>R$ 200,00</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 2 - 40
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  shoeName: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 'bold'
  },
  shoeValue: {
    color: '#333'
  }
})
