
import { Box, Flex, Stack, Button, Center } from '@chakra-ui/react'
import { MdBuild, MdCall } from "react-icons/md"
import { GiHomeGarage } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { doorCommand } from './utils/doorCommand';

export default function Home() {
  return (
    <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
      <Center>
        <Stack direction='row' spacing={4}>
          <Button leftIcon={<GiHomeGarage />} colorScheme='pink' size='lg' variant='solid' onClick={doorCommand}>
            Open/Close Door
          </Button>
          <Button rightIcon={<FaLightbulb />} colorScheme='blue' size='lg' variant='solid'>
            Lights On/Off
          </Button>
        </Stack>
      </Center>
    </Flex>
  );
}
