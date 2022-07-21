import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Orders } from '../screens/orders'
import { NewOrder } from '../screens/new-order'
import { Details } from '../screens/detailed-order.tsx'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const animation =
    Platform.OS === 'ios' ? 'slide_from_bottom' : 'slide_from_right'
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation,
      }}
    >
      <Screen name="home" component={Orders} />
      <Screen name="new" component={NewOrder} />
      <Screen name="details" component={Details} />
    </Navigator>
  )
}
