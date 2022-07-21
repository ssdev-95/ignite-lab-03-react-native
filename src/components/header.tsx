import { useNavigation } from '@react-navigation/native'

import { Box, Icon, HStack, Heading, Container, IconButton } from 'native-base'

import Caret from '../assets/caret-left.svg'
import Logo from '../assets/logo_secondary.svg'
import Logout from '../assets/sign-out.svg'

type HeaderProps = {
  atHome?: boolean
}

export function Header({ atHome = false }: HeaderProps) {
  const navigator = useNavigation()

  function handleGoBack() {
    navigator.goBack()
  }

  function handleSignOut() {
    console.log('signed out!')
  }

  if (!atHome) {
    return (
      <Container
        alignItems="flex-start"
        justifyContent="center"
        minW="full"
        bg="gray.600"
      >
        <Box w="50%" pt={12} pb={4} pl={6} pr={0}>
          <HStack alignItems="center" justifyContent="space-between">
            <IconButton
              size="sm"
              icon={<Caret height={20} width={20} />}
              borderWidth={1}
              borderColor="transparent"
              _pressed={{
                borderColor: 'primary.700',
                bg: 'transparent',
              }}
              onPress={handleGoBack}
            />

            <Heading
              flex={1}
              textAlign="center"
              color="white"
              fontSize="xl"
              mr={-32}
            >
              Order
            </Heading>
          </HStack>
        </Box>
      </Container>
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
        borderWidth={1}
        borderColor="transparent"
        _pressed={{
          borderColor: 'primary.700',
          bg: 'transparent',
        }}
        icon={<Logout height={24} width={24} />}
        onPress={handleSignOut}
      />
    </HStack>
  )
}
