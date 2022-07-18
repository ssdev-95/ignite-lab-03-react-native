import {
	Button as BaseButton, IButtonProps, Heading
} from 'native-base'

type ButtonProps = IButtonProps & {
	title:string
}

export function Button({title, ...rest}:ButtonProps) {
	return (
		<BaseButton
			bg="green.500"
			color="white"
			rounded="sm"
			h={14}
			size="md"
			fontFamily="body"
			fontSize="sm"
			_pressed={{ bg:"green.700" }}
			{...rest}
		>
			<Heading color="white" fontSize="sm">
				{title}
			</Heading>
		</BaseButton>
	)
}
