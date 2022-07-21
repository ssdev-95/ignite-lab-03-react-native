/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react'
import { Alert, Platform } from 'react-native'
import auth from '@react-native-firebase/auth'

import {
  Icon,
  VStack,
  Heading,
  useTheme,
  IconButton,
  KeyboardAvoidingView,
} from 'native-base'

import { Button } from '../components/button'
import { Input } from '../components/input'

import Envelope from '../assets/envelope.svg'
import Key from '../assets/key.svg'
import Eye from '../assets/eye.svg'
import EyeSlash from '../assets/eye-slash.svg'
import Logo from '../assets/logo_primary.svg'

export function Signin() {
  const { colors } = useTheme()
  const [showPassphrase, setShowPassphrase] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSignIn() {
    setLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        Alert.alert('Auth Error', err.code)
      })
  }

  return (
    <VStack flex={1} pt={24} px={8} bg="gray.600" alignItems="center">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          width: '100%',
          overflowY: 'scroll',
          backgroundColor: 'transparent',
          alignItems: 'center',
        }}
      >
        <Logo />

        <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
          Access your account.
        </Heading>

        <Input
          placeholder="E-mail"
          onChangeText={setEmail}
          mb={4}
          InputLeftElement={
            <Icon
              as={<Envelope fill={colors.gray[300]} height={24} width={24} />}
              ml={4}
            />
          }
        />

        <Input
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={!showPassphrase}
          InputLeftElement={
            <Icon
              as={<Key fill={colors.gray[300]} height={24} width={24} />}
              ml={4}
            />
          }
          InputRightElement={
            <IconButton
              px={0}
              mr={4}
              _pressed={{ bg: 'transparent' }}
              onPress={() => setShowPassphrase((show) => !show)}
              icon={
                <Icon
                  as={
                    showPassphrase ? (
                      <Eye height={24} width={24} />
                    ) : (
                      <EyeSlash height={24} width={24} />
                    )
                  }
                />
              }
            />
          }
        />

        <Button
          title="Enter"
          width="full"
          mt={10}
          isLoading={loading}
          onPress={handleSignIn}
        />
      </KeyboardAvoidingView>
    </VStack>
  )
}
