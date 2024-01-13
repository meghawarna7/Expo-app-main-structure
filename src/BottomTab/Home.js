import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Welcome to Expo App!</Text>
      <Text onPress={() =>navigation.navigate('Detail')}>Go to Detail page</Text>
      </View>
  )
}

export default Home