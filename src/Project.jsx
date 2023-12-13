import './Project.css'


function Project(project) {

  return (
    <>
      <div className='project-container'>
        <div className='project-top'>
          <div className='bundle'>

          <h2 className='project-title'>
          {project.name}
          </h2>
          <h3 className='project-language'>
              {project.language}
            </h3>
          </div>
        
          <a href={project.link} target="_blank" rel="noopener noreferrer">
    <img className='icon' src={project.icon} alt="Project Icon"/>
</a>

        </div>
        <div className='project-content'>
          <div className='project-info'>
            <h3 className='project-about'>
              {project.about}
            </h3>
            
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Project
