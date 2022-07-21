import { useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native'

import { Signin } from '../screens/signin'
import { AppRoutes } from './app.routes'

type IUser = FirebaseAuthTypes.User

export function Routes() {
  const [user, setUser] = useState<IUser>({} as IUser)

  useEffect(() => {
    const subscriber = auth()
      .onAuthStateChanged((response) => {
        setUser(response)
      })
      .catch((err) => console.log(err))

    return subscriber
  }, [])

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <Signin />}
    </NavigationContainer>
  )
}
