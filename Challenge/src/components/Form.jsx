import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ProjectsContext } from '../context/projectsContext'

export const Form = () => {
  const { newProject, currentProject, editing, updateProject } =
    useContext(ProjectsContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: currentProject })

  const onSubmit = (data) => {
    if (editing) {
      data.id = currentProject.id
      updateProject(currentProject.id, data)
    } else {
      newProject(data)
    }
    navigate('/')
  }

  return (
    <Box bgColor="white" p="10px 0" maxHeight={480}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <FormLabel>Project name</FormLabel>
          <Input
            placeholder="Ingrese nombre del proyecto"
            type="text"
            id="name"
            {...register('name', {
              required: 'El campo no debe estar vacío',
            })}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.description}>
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="descripción del proyecto"
            type="text"
            id="description"
            {...register('description', {
              required: 'El campo no debe estar vacío',
              minLength: {
                value: 6,
                message: 'El campo debe tener mínimo 6 caracteres',
              },
            })}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Project manager</FormLabel>
          <Select
            placeholder="Select a person"
            id="p_manager"
            {...register('p_manager', {
              required: true,
              message: 'Debe seleccionar una opción',
            })}
          >
            <option value="Sofia Rodriguez">Sofia Rodriguez</option>
            <option value="Alejandro Martinez">Alejandro Martinez</option>
            <option value="Valentina Gomez">Valentina Gomez</option>
          </Select>
          <p>{errors.p_manager?.message}</p>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Asigned to</FormLabel>
          <Select
            placeholder="Select a person"
            {...register('asigned', {
              required: true,
            })}
          >
            <option value="Lorena Perez">Lorena Perez</option>
            <option value="Marcela Cervantes">Marcela Cervantes</option>
            <option value="Laura Quiroga">Laura Quiroga</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            placeholder="Status"
            {...register('status', { required: 'Debe seleccionar una opción' })}
          >
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </FormControl>

        <Box pb={5}>
          <Button type="submit" mt={4} bg="tomato" color="white">
            {editing ? <span>Save Changes</span> : <span>Create project</span>}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
