import { InferSelectModel } from 'drizzle-orm';
import { projects } from '@/db/schema';

type Project = InferSelectModel<typeof projects>;
interface Props {
  projects: Project[];
}

const ProjectsList = (props: Props) => {
  return (
    <div>
      <h1>Projects List</h1>
      <ul>
        {props.projects.map((project: Project) => (
          <li key={project.id}>
          {project.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsList;
