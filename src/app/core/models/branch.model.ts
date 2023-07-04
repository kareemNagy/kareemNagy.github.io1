export class Branch {
  Id: number | null = 0;
  projectId: number = 0;
  projectNameAr: string = "";
  projectNameEn?: string = "";
  district: string = "";
  city: string = "";
  neighborhood: string = "";
  category: string = "";
  activity: string = "";
  icon: string = "";
  subCategory: string = "";
  longitude: string = "";
  latitude: string = "";
  status: string = "";
  description: string = "";
  storeTypeId: number = 1;
  oracleRelatedId?: any;
  splRelatedId?: any;
  contactNumber: string = "";
  isDeliverable: boolean = false;
  isMainStore: boolean = false;
  syncedDate?: any;
  project?: any;
}
