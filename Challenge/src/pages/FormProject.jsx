import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Form } from '../components/Form'
import { ProjectsContext } from '../context/projectsContext'

export const FormProject = () => {
  const { editing, changeEditing } = useContext(ProjectsContext)

  return (
    <Container
      maxW={{ base: '100%', md: 'sm', lg: 'md', xl: 'lg' }}
      mx="auto"
      bgColor="#F0F2F5"
      height={{ base: '100vh', md: 600 }}
      mt={{ base: 0, md: 10 }}
      bgGradient="linear(to-l,#7896C2,#F0F2F5)"
      centerContent
    >
      <Container maxW="md" bg="white" mt={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          p={1}
        >
          <Box>
            <div>
              <Image src="./images/logo.png" />
            </div>

            <Divider color="gray.100" />
            <Box display="flex" justifyContent="left" alignItems="center">
              <Button
                as={Link}
                to="/"
                variant="ghost"
                onClick={() => changeEditing()}
              >
                <ArrowBackIcon />
                Back
              </Button>
              <Heading as="h2" size="md" color="black">
                {editing ? 'Edit Project' : 'Add Project'}
              </Heading>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container maxW="md" bgColor="white">
        <Box m={2}>
          <Form />
        </Box>
      </Container>
    </Container>
  )
}
