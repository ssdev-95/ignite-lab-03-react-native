import {
	Center, VStack, HStack, Heading, IconButton
} from 'native-base'

import Caret from '../assets/caret-left.svg'

export function Details() {
	return (
		<VStack flex={1} bg="gray.600">
			<HStack
				alignItems="center"
				justifyContent="space-between"
				w="full"
				bg="gray.500"
				pt={12}
				pb={4}
				pl={6}
			>
				<IconButton
					size="sm"
					icon={<Caret height={20} width={20} />}
				/>

				<Heading
					flex={1}
					ml={-20}
					mr={-4}
					textAlign="center"
					color="white"
					fontSize="xl"
				>
					Order
				</Heading>
			</HStack>
			<VStack flex={1}>
				<Center flex={1} w="full"	>
					<Heading color="white">lol</Heading>
				</Center>
			</VStack>
		</VStack>
	)
}
