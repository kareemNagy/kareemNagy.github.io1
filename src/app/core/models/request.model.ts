export class Request {
  Id: number = 0;
  ProjectId: number = 0;
  CreatedDate: Date = new Date();
  CreatedBy: string = "";
  ApprovalStatusEnum: number = 0;
  RelatedProjectVersionId: number = 0;
  OriginalProject?: any;
  ApprovalStatusRecord: ApprovalStatusRecord = new ApprovalStatusRecord();
  ReviewsHistory?: any;
}

export class ApprovalStatusRecord {
  Id: number = 0;
  NameAr: string = "";
  NameEn: string = "";
}
