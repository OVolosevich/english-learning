import { createRoot } from 'react-dom/client'
import App from './app'
import React from 'react'

const node = document.getElementById('root')
const root = createRoot(node as HTMLElement)
root.render(<App/>)
