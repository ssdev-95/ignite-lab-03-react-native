import { ReactNode } from 'react'

type CardProps = {
	title:string
	content?:string
	footer?:string
	children?:ReactNode
	icon:ReactNode
}

export function CardDetail({
	icon,
	title,
	footer,
	content,
	children
}:CardProps) {
	return (
		<Box
			bg="gray.600"
			p={4}
			mx={6}
			maxW={400}
			rounded="md"
		>
			<VStack space={3}>
				<HStack alignItems="center" space={3}>
					{icon}

					<Text
						color="gray.300"
						textTransform="uppercase"
					>
						{title}
					</Text>
				</HStack>

				{!!content && (
					<Text color="gray.100">
						{content}
					</Text>
				)}


				{!!footer&& (
					<Text color="gray.100">
						{footer}
					</Text>
				)}

				{children}
			</VStack>
		</Box>
	)
}
