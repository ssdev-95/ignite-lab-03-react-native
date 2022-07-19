import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { 
	useFonts,
	Roboto_700Bold,
	Roboto_400Regular
} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/loading'
import { Signin } from './src/screens/signin'
import { Orders } from './src/screens/orders'
import { NewOrder } from './src/screens/new-order'
import { Details } from './src/screens/detailed-order.tsx'
import { THEME } from './src/styles/theme'

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_700Bold,
		Roboto_400Regular
	})

  return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
	    {fontsLoaded ? <NewOrder /> : <Loading/>}
		</NativeBaseProvider>
  );
}
