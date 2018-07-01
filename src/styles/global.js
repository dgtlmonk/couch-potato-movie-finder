import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: '#ECECEC',
    font-family: 'aktiv-grotesk-std', Helvetica Neue, Arial, sans-serif !default;
  }
`