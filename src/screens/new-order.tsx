import { VStack } from 'native-base'

import { Input } from '../components/input'
import { Button } from '../components/button'
import { Header } from '../components/header'

export function NewOrder() {
	return (
		<VStack flex={1} bg="gray.600">
			<Header atHome={false} />
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
