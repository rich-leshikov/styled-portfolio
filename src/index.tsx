import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {GlobalStyles} from './styles'

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(<><App/><GlobalStyles/></>)
