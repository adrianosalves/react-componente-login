import { ChakraProvider, Card, Input, Button } from '@chakra-ui/react';

import { login } from './services/login';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Card>
          <Header/>
          <h1>Login</h1>
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Button onClick={login}>Entrar</Button>
        
      </Card>
    </ChakraProvider>
  );
}

export default App;