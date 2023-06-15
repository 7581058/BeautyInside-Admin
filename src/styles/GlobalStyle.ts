import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    letter-spacing: -5%;
    color: ${(props) => props.theme.colors.text_primary}
  }

  .test {
    position: absolute;
    left: 50%;
    top: 50%;
  }
`

export default GlobalStyles
