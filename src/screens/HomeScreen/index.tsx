import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { ShoeList } from '~/components/ShoeList'

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require('~/assets/banner.png')} style={styles.image} />

          <View style={styles.textHeader}>
            <View style={styles.textContainer}>
              <Text style={[styles.text]}>TÊNIS</Text>
              <Text style={[styles.text, { color: '#cececf' }]}>·</Text>
              <Text style={[styles.text, { color: '#cececf' }]}>MASCULINO</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="filter-list" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line} />

        <ScrollView contentContainerStyle={styles.contentScrollView}>
          <Text style={styles.text}>Lançamentos</Text>
          <View style={styles.separator} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <ShoeList />
            <ShoeList />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 8,
    width: '100%'
  },
  image: {
    width: '100%'
  },
  textHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: '5%'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    color: '#000'
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#cececf',
    marginVertical: 10
  },
  contentScrollView: {
    paddingHorizontal: 20,
    flexGrow: 1
  },
  separator: {
    paddingBottom: 10
  }
})
