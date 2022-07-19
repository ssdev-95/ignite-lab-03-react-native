import {
  Box,
  Text,
  Circle,
  HStack,
  VStack,
  useTheme,
  Pressable,
  IPressableProps,
} from 'native-base'

import ClockAfternoon from '../assets/clock-afternoon.svg'
import Hourglass from '../assets/hourglass.svg'
import Check from '../assets/circle-wavy-check.svg'

export interface IOrder {
  id: string
  patrimony: string
  startedAt: string
  closedAt: string
  status: 'open' | 'closed'
}

type OrderProps = IPressableProps & {
  order: IOrder
}

export function Order({ order, ...rest }: OrderProps) {
  const { colors } = useTheme()
  const typeColor =
    order.status === 'open' ? colors.secondary[700] : colors.green[500]

  return (
    <Pressable
      borderWidth={1}
      borderColor="gray.600"
      _pressed={{
        borderColor: 'gray.200',
        rounded: 'sm',
      }}
      {...rest}
    >
      <HStack
        h={20}
        pr={4}
        bg="gray.500"
        rounded="sm"
        overflow="hidden"
        alignItems="center"
      >
        <Box h="full" w={2} bg={typeColor} />
        <VStack flex={1} px={4} justifyContent="center" alignItems="flex-start">
          <Text color="white" mb={2} fontSize="md">
            Patrimony {order.patrimony}
          </Text>
          <HStack alignItems="center" justifyContent="flex-start">
            <ClockAfternoon height={20} width={20} />
            <Text ml={2} color="gray.300" fontSize="xs">
              {order.startedAt}
            </Text>
          </HStack>
        </VStack>
        <Circle size="sm" bg="gray.400" rounded={90}>
          {order.status === 'open' ? (
            <Hourglass color={colors.secondary[700]} height={32} width={32} />
          ) : (
            <Check color={colors.green[500]} height={32} width={32} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  )
}
