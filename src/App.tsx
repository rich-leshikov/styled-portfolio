import {Button, Card, Header, Image, Info, Paragraph} from './styled-components'

export function App() {
	return (
		<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Card>
				<Image src={require('./assets/images/desert.jpeg')} alt={'desert'}/>
				<Info>
					<Header>Headline</Header>
					<Paragraph>
						Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
					</Paragraph>
					<div style={{display: 'flex', gap: '15px'}}>
						<Button btnType={'primary'}>See more</Button>
						<Button btnType={'secondary'}>Save</Button>
					</div>
				</Info>
			</Card>
		</div>
	)
}
