import { ChakraProvider, Card, Input, Button, Box, Center, FormHelperText, FormControl, Stack } from '@chakra-ui/react';

import { login } from './services/login';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#0e0a5b' padding='25px'>
        <Header/>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
            <Card>
              <FormControl>
                <Center>
                  <h1>Login</h1>
                </Center>
                <Input placeholder='email' id='emailInput' type='email' />
                  <FormHelperText>Seu email nunca será compartilhado...</FormHelperText>                
                <Input placeholder='password' id='passwordInput' type='password' />
                <Stack spacing={4} direction='row' align='center'>
                  <Button onClick={login} colorScheme='green' size='md' width='100%' marginTop='5px'>Entrar</Button>
                </Stack>
              </FormControl>           
            </Card>
          </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;