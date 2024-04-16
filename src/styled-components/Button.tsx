import styled, {css} from 'styled-components'

type Props = {
	btnType: 'primary' | 'secondary'
}

export const Button = styled.button<Props>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-size: 11px;
	font-weight: bold;
	cursor: pointer;
	
	${props => props.btnType === 'primary' && css<Props>`
    background-color: #4E71FE;
    color: #fff;
		border: none;
	`}
	
	${props => props.btnType === 'secondary' && css<Props>`
    background-color: #fff;
		color: #4E71FE;
    border: 2px solid #4E71FE;
	`}
`