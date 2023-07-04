import { FileUpload } from "./file-upload.model";

export class ProductCreation {
  projectId: number = 0;
  nameAr: string = "";
  nameEn: string = "";
  shortDescriptionAr: string = "";
  shortDescriptionEn: string = "";
  fullDescriptionAr: string = "";
  fullDescriptionEn: string = "";
  productCategoryId: number = 1;
  price: number = 0;
  canDelivered: boolean = false;
  unitAr: string = "";
  unitEn: string = "";
  keywordslst: string[] = [];
  filelst: FileUpload[] = [];
}