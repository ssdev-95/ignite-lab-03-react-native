import {
	Center, VStack, Heading
} from 'native-base'

import { Header } from '../components/header'

export function Details() {
	return (
		<VStack flex={1} bg="gray.600">
			<Header atHome={false} />
			<VStack flex={1}>
				<Center flex={1} w="full"	>
					<Heading color="white">lol</Heading>
				</Center>
			</VStack>
		</VStack>
	)
}
