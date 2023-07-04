import { Project } from "src/app/core/models/project.model";
import { ProjectInfo } from "./project-info.model";

export interface EditRequest {
  Id: number;
  ProjectId: number;
  CreatedDate: string;
  CreatedBy: string;
  ApprovalStatusEnum: number;
  RelatedProjectVersionId: number;
  OriginalProject: ProjectInfo;
}
