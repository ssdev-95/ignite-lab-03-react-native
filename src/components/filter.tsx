import {
	Text, Button, useTheme, IButtonProps
} from 'native-base'

type FilterProps = IButtonProps & {
	title: string
	type: 'open' | 'closed'
	isActive: boolean
}

export function Filter({
	title, type, isActive, ...rest
}:FilterProps) {
	const { colors } = useTheme()

	const typeColor = type === 'open' ? colors.secondary[700] : colors.green[500]

	return (
		<Button
			bg="gray.500"
			borderColor={isActive ? typeColor : colors.gray[30]}
			borderWidth={isActive ? 1 : 0}
			_pressed={{ bg:'gray.500' }}
			size="sm"
			{...rest}
		>
			<Text
				textTransform="uppercase"
				color={isActive ? typeColor : colors.gray[300]}
			>
				{title}
			</Text>
		</Button>
	)
}
