import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LayoutDesign from './components/MyLayoutDesign'
import MyLayoutDesign from './components/MyLayoutDesign'
import Story from './components/Story'

export default function App() {
  return (
    <ScrollView>
      
   
      <Story />
      <MyLayoutDesign />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})