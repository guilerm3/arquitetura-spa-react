import { useState, useEffect, useContext } from 'react'
import './ProjectsList.css'
import { AppContext } from '../../contexts/AppContext'

/*ASSETS*/
import LikeFilled from '../../assets/like-filled.svg'
import Like from '../../assets/like.svg'

/*UTILS*/
import { getApiData } from '../../services/apiServices'

function ProjectsList(props) {
    const appContext = useContext(AppContext)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    return (
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className='projects-grid'>
                {
                    projects ?
                        projects.map((project) => (
                            <div className='projects-card d-flex jc-center al-center fd-column' key={project.id}>
                                <div
                                    className='thumb tertiary-background'
                                    style={{ backgroundImage: `url(${project.thumb})` }}
                                ></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <img src={Like} height='20px' />
                            </div>
                        ))
                    : 
                    null
                }
            </div>
        </div>
    )
}

export default ProjectsList