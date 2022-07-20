import { useRoute } from '@react-navigation/native'
import {
	Box,
	Text,
	Center,
	HStack,
	VStack,
	Heading,
	useTheme,
	ScrollView
} from 'native-base'

import { Input } from '../components/input'
import { IOrder } from '../components/order'
import { Button } from '../components/button'
import { CardDetail } from '../components/card-detail'

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
							'processing' :
							'finalized'
						}
					</Text>
				</HStack>

				<VStack space={3} flex={1}>
				<ScrollView
					w="full"
					showsVerticalScrollIndicator={false}
				>
					<CardDetail
						title="Equipment"
						icon={<Desktop height={24} width={24}/>}
						content={`Patrimony ${order.patrimony}`}
					/>

					<CardDetail
						title="Problem"
						icon={<Clipboard height={24} width={24}/>}
						content={order.description}
						footer={`Opened at ${order.startedAt}`}
					/>

					<CardDetail
						title="Solution"
						icon={<Check height={24} width={24}/>}
						content={order.solution}
					>
						<Input
							h={200}
							multiline
							textAlignVertical="top"
							placeholder="Solution proposal"
							fontSize="md"
						/>
					</CardDetail>
				</ScrollView>
				{order.status === 'open' && (
					<Button
						title="Close order"
						mx={6}
						mb={4}
					/>
				)}
				</VStack>
      </VStack>
    </VStack>
  )
}
