import { useEffect, useState /*, useMemo */ } from 'react'
import { useNavigation } from '@react-navigation/native'

import firestore from '@react-native-firebase/firestore'

import { Text, VStack, HStack, FlatList } from 'native-base'

import { Filter } from '../components/filter'
import { Order } from '../components/order'
import { Button } from '../components/button'
import { Header } from '../components/header'

import Desktop from '../assets/desktop-tower.svg'

export function Orders() {
  const navigator = useNavigation()
  const [filter, setFilter] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState([
    /*
    {
      id: 'order-82e8durjew-0707202',
      patrimony: '883nn292',
      startedAt: '07/07/2022',
      closedAt: '12/072022',
      status: 'closed',
    },
    {
      id: 'order-niaj2e8rij-1907202',
      patrimony: 'jew82jr9',
      startedAt: '19/07/2022',
      closedAt: null,
      status: 'open',
    },
  */
  ])

  /*const filteredOrders = useMemo(() => {
    return orders.filter((order) => order.status === filter)
  }, [filter, orders])*/

  function handleViewOrder(orderId: string) {
    navigator.navigate('details', { orderId })
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('orders')
      .where('status', '==', filter)
      .onSnapshot((response) => {
        const docs = response.docs.map((doc) => {
          const {
            description,
            patrimony,
            created_at,
            closed_at,
            status,
            solution,
          } = doc.data()

          return {
            id: doc.id,
            description,
            patrimony,
            status,
            solution,
            startedAt: created_at,
            closedAt: closed_at ? closed_at : null,
          }
        })

        setOrders(docs)
      })

    return subscriber
  }, [filter])

  return (
    <VStack flex={1} w="full" bg="gray.600" pb={6}>
      <Header atHome />

      <VStack flex={1} pt={6} px={6}>
        <HStack w="full" justifyContent="space-between">
          <Text color="white" fontSize="xl">
            All orders
          </Text>

          <Text color="gray.300">{orders.length}</Text>
        </HStack>

        <HStack w="full" space={3} mt={4} mb={8}>
          <Filter
            title="ongoing"
            type="open"
            flex={1}
            isActive={filter === 'open'}
            onPress={() => setFilter('open')}
          />

          <Filter
            title="closed"
            type="closed"
            flex={1}
            isActive={filter === 'closed'}
            onPress={() => setFilter('closed')}
          />
        </HStack>
        {!filteredOrders.length ? (
          <VStack pt={4} flex={1} alignItems="center">
            <Desktop height={128} width={128} />
            <Text color="gray.300" textAlign="center" fontSize="xl" mt={4}>
              You don&apos;t have any {'\n'}
              orders {filter} yet.
            </Text>
          </VStack>
        ) : (
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <Order order={item} onPress={() => handleViewOrder(item.id)} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </VStack>

      <HStack px={6} mt={6} w="full" maxW={400} mx="auto">
        <Button
          title="New order"
          onPress={() => navigator.navigate('new')}
          mx="auto"
          w="full"
        />
      </HStack>
    </VStack>
  )
}
