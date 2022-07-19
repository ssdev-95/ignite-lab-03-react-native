import { Input as BaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
  return (
    <BaseInput
      bg="gray.700"
      placeholderTextColor="gray.300"
      color="white"
      borderWidth={0}
      rounded="sm"
      h={14}
      size="md"
      fontFamily="body"
      maxW={400}
      fontSize="xl"
      _focus={{
        borderWidth: 1,
        borderColor: 'green.500',
        bg: 'gray.700',
      }}
      {...rest}
    />
  )
}
