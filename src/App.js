import { ThemeProvider } from 'styled-components';
import Header from './components/Header.js';
import Card from './components/Card.js';
import { Container } from './styles/Container.styled';
import GlobalStyles from './styles/Global.js';
import content from './content';
import Footer from './components/Footer.js';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card
              key={index}
              item={item}
            />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
