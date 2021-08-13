import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/services" exact component={() => <Services />} />
            <Route path="/contact" exact component={() => <Contact />} />
          </Switch>
          <Footer />
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
