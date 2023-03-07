import { ProjectData } from "../../lib/interfaces";
import ChildItem from "../layout/child-item";
import styles from '../../styles/Projects.module.css';


export interface ProjectElementProps { 
  project: ProjectData;
}

const ProjectElement = ({ project }: ProjectElementProps) => {

  return (
    <ChildItem urlPath={project.link}>
      <div className={styles.projectContainer}>
        <div className={styles.titleContainer}>
          <h2>{project.name}</h2>
          <p>{project.state}</p>
        </div>
        <div className={styles.progressContainer}>
          <div 
            className={styles.barContainer}
            style={{ 
              width: `${project.progress}%`
            }}
          />
          <p className={styles.barText}>{`${project.progress}%`}</p>
        </div>
      </div>
    </ChildItem>
  );
}

export default ProjectElement;
