import {
	Icon, HStack, Heading, IconButton
} from 'native-base'

import Caret from '../assets/caret-left.svg'
import Logo from '../assets/logo_secondary.svg'
import Logout from '../assets/sign-out.svg'

type HeaderProps = {
	atHome?:boolean
}

export function Header({ atHome = false }) {
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
			/>
		</HStack>
	)
}
