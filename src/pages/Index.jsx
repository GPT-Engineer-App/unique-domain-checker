import { useState } from "react";
import { Container, Input, Button, VStack, Text, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    // Placeholder for search logic
    setResult(`Results for ${domain}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={6}>Domain Name Registrar</Heading>
        <Box width="100%">
          <Input 
            placeholder="Search for a domain name" 
            size="lg" 
            value={domain} 
            onChange={(e) => setDomain(e.target.value)} 
          />
        </Box>
        <Button colorScheme="blue" size="lg" onClick={handleSearch}>Search</Button>
        {result && (
          <Box mt={6} p={4} borderWidth="1px" borderRadius="lg" width="100%">
            <Text>{result}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;