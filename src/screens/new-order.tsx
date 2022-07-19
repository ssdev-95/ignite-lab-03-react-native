import { VStack } from 'native-base'
//import { useNavigation } from '@react-navigation/native'

import { Input } from '../components/input'
import { Button } from '../components/button'
import { Header } from '../components/header'

export function NewOrder() {
	//const navigator = useNavigation()

	return (
		<VStack flex={1} bg="gray.600">
			<Header />
			<VStack flex={1} px={6} py={10}>
				<Input
					placeholder="Patrimony"
				/>
				<Input
					my={6}
					flex={1}
					multiline
					textAlignVertical="top"
					placeholder="Order details"
				/>
				<Button title="Create order" />
			</VStack>
		</VStack>
	)
}
