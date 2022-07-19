import { useNavigation } from '@react-navigation/native'

import {
	Icon, HStack, Heading, IconButton
} from 'native-base'

import Caret from '../assets/caret-left.svg'
import Logo from '../assets/logo_secondary.svg'
import Logout from '../assets/sign-out.svg'

type HeaderProps = {
	atHome?:boolean
	onGoBack?: ()=>void
}

export function Header({ atHome = false, onGoBack }) {
	const navigator = useNavigation()

	function handleGoBack() {
		navigator.goBack()
	}

	function handleSignOut() {
		console.log('signed out!')
	}

	if(!atHome) {
		return (
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
					size="md"
					icon={<Caret height={20} width={20} />}
					_pressed={{ bg:'primary.700' }}
					onPress={handleGoBack}
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
		)
	}

	return (
		<HStack
			alignItems="center"
			justifyContent="space-between"
			w="full"
			bg="gray.500"
			pt={12}
			pb={4}
			px={6}
		>
			<Icon as={<Logo />} />

			<IconButton
				size="sm"
				icon={<Logout height={24} width={24} />}
				onPress={handleSignOut}
			/>
		</HStack>
	)
}
