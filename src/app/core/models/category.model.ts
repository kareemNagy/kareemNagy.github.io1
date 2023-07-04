export interface Category {
  id: number;
  nameEn: string;
  nameAr: string;
  Id?: number;
  Name_En?: string;
  Name_Ar?: string;
  name?: string;
  activity: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: number;
  Id?: number;
  nameEn: string;
  nameAr: string;
  Name_Ar?: string;
  Name_En?: string;
}
