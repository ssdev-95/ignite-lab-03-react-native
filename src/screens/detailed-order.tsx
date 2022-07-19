import { useRoute } from '@react-navigation/native'
import {
	Box, Text, Center, HStack, VStack, Heading, useTheme
} from 'native-base'

import { Input } from '../components/input'
import { IOrder } from '../components/order'
import { Button } from '../components/button'

import Desktop from '../assets/desktop-tower.svg'
import Hourglass from '../assets/hourglass.svg'
import Check from '../assets/circle-wavy-check-alt.svg'
import Clipboard from '../assets/clipboard-text.svg'

interface RootParams {
  orderId: string
}

type OrderType = IOrder & {
	description:string
	solution?:string
	//id:string
	//patrimoby:string
	//startedAt:string
	//closedA?t:string|null
	//status: 'open'|'closed'
}

import { Header } from '../components/header'

export function Details() {
	const { colors } = useTheme()

  const route = useRoute()
  const { orderId } = route.params as RootParams


	const order = {
		id: orderId,
		description: 'Tem um salame que não está me deixando trabalhar.',
		patrimony:'pat-29fhdjqk19-15072022',
		startedAt:'15/07/2022 at 19 O`Clock',
		status:'open',
		closedAt:null
	}

	const typeColor = order.status === 'open' ?
		colors.secondary[700] :
		colors.green[500]

  return (
    <VStack flex={1} bg="gray.700">
      <Header />
      <VStack flex={1} space={4}>
				<HStack
					w="full"
					py={4}
					alignItems="center"
					justifyContent="center"
					space={3}
					bg="gray.500"
				>
					{order.status === 'closed' ? (
						<Check height={24} width={24} />
					) : (
						<Hourglass height={24} width={24} />
					)}
					<Text
						textTransform="uppercase"
						color={typeColor}
						fontWeight={700}
						fontSize="md"
					>
						{
							order.status === 'open' ?
							'on going' :
							'finalizado'
						}
					</Text>
				</HStack>
				<Box bg="gray.600" p={4} mx={6} rounded="md">
					<VStack space={3}>
						<HStack alignItems="center" space={3}>
							<Desktop height={24} width={24} />
							<Text
								color="gray.300"
								textTransform="uppercase"
							>
								equipment
							</Text>
						</HStack>
		        <Text color="gray.100">
							Patrimony&nbsp;&nbsp;
							{order.patrimony}
						</Text>
					</VStack>
				</Box>

				<Box
					bg="gray.600"
					p={4}
					mx={6}
					rounded="md"
					h={150}
				>
					<VStack space={3}>
						<HStack alignItems="center" space={3}>
							<Clipboard height={24} width={24} />

							<Text
								color="gray.300"
								textTransform="uppercase"
							>
								problem description
							</Text>
						</HStack>

						<Text color="gray.100">
							{order.description}
						</Text>
						<Text>
							Opened at&nbsp;
							{order.startedAt}
						</Text>
					</VStack>
				</Box>
				{order.status === 'closed' ? (
					<Box
						bg="gray.600"
						p={4}
						mx={6}
						rounded="md"
						h={150}
					>
						<VStack space={3}>
							<HStack alignItems="center" space={3}>
								<Check height={24} width={24} />

								<Text
									color="gray.300"
									textTransform="uppercase"
								>
									solution
								</Text>
							</HStack>

							<Text color="gray.100">
								{order.solution}
							</Text>
							
							<Text>
								Closed at&nbsp;
								{order.closedAt}
							</Text>
						</VStack>
					</Box>
				) : (
					<VStack mx={6} pb={6} flex={1} space={3}>
						<Box
							flex={1}
							bg="gray.600"
							rounded="md"
							p={4}
						>
							<VStack space={3}>
								<HStack alignItems="center" space={3}>
									<Check height={24} width={24} />

									<Text
										color="gray.300"
										textTransform="uppercase"
									>
										solution
									</Text>
								</HStack>
								<Input
									flex={1}
									w="full"
									placeholder="Solution proposal"
								/>
							</VStack>
						</Box>
						<Button title="Close order" />
					</VStack>
				)}
      </VStack>
    </VStack>
  )
}
