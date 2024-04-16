import {Button, Card, Header, Image, Info, Paragraph} from './styled-components'

export function App() {
	return (
		<div className="App">
			<Title>Welcome to IT-INCUBATOR</Title>
		<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Card>
				<Image src={require('./assets/images/desert.jpeg')} alt={'desert'}/>
			</Card>
		</div>
	)
}
