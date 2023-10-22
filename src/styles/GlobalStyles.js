import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 body > #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
 }`

export default GlobalStyles
