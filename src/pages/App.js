import {ChakraProvider} from '@chakra-ui/react'
import SearchPanel from "../components/SearchPanel"
import MainPage from "./MainPage"

function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
