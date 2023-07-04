import { Attachment } from "./attachment.model";

export class Product {
  Id: number = 0;
  ProjectId: number = 0;
  nameAr: string = "";
  nameEn: string = "";
  ShortDescriptionAr: string = "";
  ShortDescriptionEn: string = "";
  FullDescriptionAr: string = "";
  FullDescriptionEn: string = "";
  ProductCategoryId: number = 0;
  Price: number = 0;
  CanDelivered: boolean = false;
  UnitAr: string = "";
  UnitEn: string = "";
  Keywordslst: any[] = [];
  project?: any;
  Attachmentlst: any[] = [];
}
