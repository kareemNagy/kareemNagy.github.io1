import { StoreType } from "./store-type.model";

export interface Store {
  StoreType: StoreType;
  Project: any;
  Id: number;
  NameEn: string;
  NameAr: string;
  ProjectId: number;
  Longitude: string;
  Latitude: string;
  IsMainStore: boolean;
  StoreTypeId: number;
  OracleRelatedId: any;
  SplRelatedId: any;
  SyncedDate: any;
}
