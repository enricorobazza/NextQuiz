import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
// const theme = {
//   primary: 'green',
// };
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </MuiThemeProvider>
    );
  }
}
