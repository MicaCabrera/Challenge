import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useContext } from 'react'

import { ProjectsContext } from '../context/projectsContext'

export const ModalDelete = ({ isOpen, onClose }) => {
  const { deleteProject, currentProject } = useContext(ProjectsContext)

  const handleDelete = () => {
    deleteProject(currentProject.id)
    onClose()
  }

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar proyecto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <p>
              ¿Seguro desea eliminar el proyecto{' '}
              <strong>{currentProject.name} </strong> ?
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Eliminar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
