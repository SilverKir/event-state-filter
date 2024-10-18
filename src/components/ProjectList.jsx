import PropTypes from 'prop-types'

export const ProjectList = ({ projects }) => {
    return (
        <div className="portfolio">
            {projects.map((project, i) => (
                <div className="portfolio__project" key={i}>
                    <img src={project.img} alt="" />
                </div>
            ))}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired
        })
    ).isRequired
}
