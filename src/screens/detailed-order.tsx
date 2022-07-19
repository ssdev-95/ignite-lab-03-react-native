import { useRoute } from '@react-navigation/native'

import {
	Center, VStack, Heading
} from 'native-base'

interface RootParams {
	orderId:string
}

import { Header } from '../components/header'

export function Details() {
	const route = useRoute()
	const { orderId } = route.params as RootParams

	return (
		<VStack flex={1} bg="gray.600">
			<Header />
			<VStack flex={1}>
				<Center flex={1} w="full"	>
					<Heading color="white">{orderId}</Heading>
				</Center>
			</VStack>
		</VStack>
	)
}
