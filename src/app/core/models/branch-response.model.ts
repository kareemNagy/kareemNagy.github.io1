import { Branch } from "./branch.model";

export interface BranchResponse {
  Rows: Branch[];
  PaginationInfo: PaginationInfo;
}

export interface PaginationInfo {
  TotalRowsCount: number;
  TotalPagesCount: number;
}
