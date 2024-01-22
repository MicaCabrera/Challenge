import {
  DeleteIcon,
  DragHandleIcon,
  EditIcon,
  SearchIcon,
} from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { ProjectsContext } from '../context/projectsContext'
import { ModalDelete } from './ModalDelete'

export const CardUser = () => {
  const { projects, editForm, setCurrentProject } = useContext(ProjectsContext)
  const [filterByName, setFilterByName] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(filterByName.toLowerCase())
  )
  const handleDeleteClick = (project) => {
    setCurrentProject(project)
    onOpen()
  }

  return (
    <Container maxW="sm" padding=" 0px" minHeight={500}>
      <Box>
        <InputGroup mt={2} mb={2}>
          <Input
            bg="white"
            type="text"
            placeholder="Nombre del proyecto"
            value={filterByName}
            onChange={(e) => setFilterByName(e.target.value)}
          />
          <InputRightAddon>
            {' '}
            <SearchIcon w={4} />
          </InputRightAddon>
        </InputGroup>
      </Box>
      <Box maxHeight="320px" overflowY="auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <Card borderRadius={0} mb={1} key={p.id} p={4}>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Box>
                    <Heading size="sm">{p.name}</Heading>
                    <Text fontSize="xs">Creation date {p.date}</Text>
                    <Flex gap="4" alignItems="center" pt={2}>
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <p>{p.p_manager}</p>
                    </Flex>
                  </Box>
                </Flex>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<DragHandleIcon />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem
                      as={Link}
                      to="/Formulario-Proyecto"
                      icon={<EditIcon />}
                      onClick={() => editForm(p)}
                    >
                      Editar
                    </MenuItem>
                    <MenuItem
                      icon={<DeleteIcon />}
                      onClick={() => handleDeleteClick(p)}
                    >
                      Eliminar
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Card>
          ))
        ) : (
          <Text m={20}>No hay proyectos que mostrar</Text>
        )}
      </Box>
      <ModalDelete isOpen={isOpen} onClose={onClose} />
    </Container>
  )
}
