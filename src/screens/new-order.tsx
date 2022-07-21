import { useState } from 'react'
import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Input } from '../components/input'
import { Button } from '../components/button'
import { Header } from '../components/header'

export function NewOrder() {
  const navigation = useNavigation()
  const [patrimony, setPatrimony] = useState('')
  const [description, setDescritpion] = useState('')
  const [loading, setLoadig] = useState(false)

  function handleOpenNewOrder() {
    if (!!patrimony || !!description) {
      return Alert.alert('Order', 'No valid info(s) provided!')
    }

    setLoadig(true)

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        created_at: 'lo',
      })
      .then(() => {
        setLoading(false)
        navigation.goBack()
      })
      .catch((err) => {
        Alert.alert('Order error', err)
        setLoading(false)
      })
  }

  return (
    <VStack flex={1} bg="gray.600">
      <Header />
      <VStack flex={1} px={6} py={10}>
        <Input placeholder="Patrimony" onChangeText={setPatrimony} />
        <Input
          my={6}
          flex={1}
          multiline
          textAlignVertical="top"
          placeholder="Order details"
          onChangeText={setDescritpion}
        />
        <Button
          title="Create order"
          isLoading={loading}
          onPress={handleOpenNewOrder}
        />
      </VStack>
    </VStack>
  )
}
