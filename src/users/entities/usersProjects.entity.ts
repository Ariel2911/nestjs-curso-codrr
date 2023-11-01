import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { ACCESS_LEVEL } from 'src/constants/roles';
import { UserEntity } from './users.entity';
import { ProjectEntity } from 'src/projects/entities/projects.entity';

@Entity({ name: 'users_projects' })
export class UsersProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVEL })
  accessLevel = ACCESS_LEVEL;

  @ManyToOne(() => UserEntity, (user) => user.projectsIncludes)
  user: UserEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.usersIncludes)
  project: ProjectEntity;
}
