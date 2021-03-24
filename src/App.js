// import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container"

function App() {
  return (
   <div>
      <Header />
     <Container style={{backgroundColor: "#00518073"}}>
      <Main />
      <Footer />

     </Container>

   </div>
   
   
  );
}

export default App;
