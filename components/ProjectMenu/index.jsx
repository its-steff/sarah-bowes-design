import styles from './project-menu.module.scss';
import Link from 'next/link';

const ProjectMenu = ({ projects }) => {
  return (
    <div className={styles.project_menu}>
      {projects &&
        projects.map((project) => (
          <Link
            key={project.fields.title}
            href={`/project/${project.fields.slug}`}
          >
            {project.fields.title}
          </Link>
        ))}
    </div>
  );
};

export default ProjectMenu;
