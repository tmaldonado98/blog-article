
import ArticleNav from './ArticleNav';
import Body from './Body';
import Header from './Header';
import NavBar from './Nav';
import Footer from './Footer';
import './styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  if (window.location.hash) {
    window.history.replaceState(null, document.title, window.location.pathname);
  }

  return (
    <ChakraProvider>
        <header>
          <NavBar />       
          <Header />
          <ArticleNav />
        </header>
        <div style={{width:'70%', margin:'6px auto'}}><hr/></div>
        <Body />
        <Footer />
    </ChakraProvider>
  );
}

export default App;
