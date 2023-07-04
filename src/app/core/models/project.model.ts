import { Attachment } from "./attachment.model";
import { Branch } from "./branch.model";
import { Partner } from "./partner.model";
import { Product } from "./product.model";

export interface Project {
  projectId: number;
  address?: string;
  projectCategoryId?: number;
  projectSubCategoryId?: number;
  nameEn: string;
  nameAr: string;
  activity: string;
  activityAr: string;
  activityEn: string;
  category: string;
  categoryAr: string;
  categoryEn: string;
  subCategory: string;
  subCategoryEn: string;
  subCategoryAr: string;
  destrict: string;
  city: string;
  neighborhood: string;
  descriptionAr: string;
  descriptionEn: string;
  contactNumber: string;
  twitter: string;
  instagram?: any;
  siteUrl: string;
  status: string;
  logoUrl: string;
  latitude?: string;
  longitute?: string;
  longitude?: string;
  products: Product[];
  attachments: Attachment[];
  branches: Branch[];
  reviews: any[];
  partners: Partner[];
}

export interface PaginationInfo {
  TotalRowsCount: number;
  TotalPagesCount: number;
}

export interface ProjectResponse {
  Rows: Project[];
  PaginationInfo: PaginationInfo;
}
