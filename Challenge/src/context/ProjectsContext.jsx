import { format } from 'date-fns'
import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ProjectsContext = createContext()

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([])
  const [editing, setEditing] = useState(false)

  const [currentProject, setCurrentProject] = useState({
    id: null,
    name: '',
    description: '',
    p_manager: '',
    asigned: '',
    status: '',
    date: '',
  })
  const currentDate = new Date()
  const formattedDate = format(currentDate, 'yyyy/MM/dd HH:mm')

  const newProject = (project) => {
    project.id = uuidv4()
    project.date = formattedDate
    setProjects([...projects, project])
  }

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const editForm = (project) => {
    setEditing(true)
    setCurrentProject({
      id: project.id,
      name: project.name,
      description: project.description,
      p_manager: project.p_manager,
      asigned: project.asigned,
      status: project.status,
      date: project.date,
    })
  }

  useEffect(() => {
    if (!editing) {
      setCurrentProject({
        id: '',
        name: '',
        description: '',
        p_manager: '',
        asigned: '',
        status: '',
        date: '',
      })
    }
  }, [editing])

  const changeEditing = () => {
    setEditing(false)
  }

  const updateProject = (id, updatedProject) => {
    setEditing(false)
    setProjects(projects.map((p) => (p.id === id ? updatedProject : p)))
  }

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        newProject,
        deleteProject,
        setCurrentProject,
        currentProject,
        setEditing,
        editForm,
        editing,
        updateProject,
        changeEditing,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
