import { environment } from "./../../../environments/environment";

export class Constant {
  static readonly HOST = environment.hostUrl;
  static readonly APP_LANG = "app_lang";
  static readonly APP_THEME = "app_theme";
  static readonly PROJECT_INFO = this.HOST + "/api/Search/GetById/{projectId}";
  static readonly PROJECT_LIST = this.HOST + "/api/Search/List";
  static readonly PROJECT_UPLOAD_MULTIPLE_FILES_URL =
    this.HOST + "/api/Project/PostMultipleFile/{projectId}";
  static readonly PARTNERS_INFO = this.HOST + "/api/Partner/List";
  static readonly PARTNER_INFO = this.HOST + "/api/Partner/GetById/{partnerId}";
  static readonly BANK_BRANCHES =
    this.HOST + "/api/ProjectStore/List?IsMainStore=true";
  static readonly BRANCH_INFO =
    this.HOST + "/api/ProjectStore/GetById/{storeId}";
  static readonly EDIT_REQUESTS =
    this.HOST + "/api/Approval/WaitingForApprovals";
  static readonly EDIT_REQUEST =
    this.HOST + "/api/Approval/VersionDetails/{versionId}";
  static readonly PRODUCT_INFO = this.HOST + "/api/Product/GetById/{productId}";
  static readonly PROJECT_ID_PARAM = "ProjectId";
  static readonly ALL_CATEGORIES = this.HOST + "/api/ProjectCategory/List";
  static readonly CATEGORY_UPDATE =
    this.HOST + "/api/ProjectCategory/Update/{categoryId}";
  static readonly ALL_SUBCATEGORIES =
    this.HOST + "/api/ProjectSubCategory/List";
  static readonly SUBCATEGORY_UPDATE =
    this.HOST + "/api/ProjectSubCategory/Update/{subCategoryId}";
  static readonly SUBCATEGORY_BY_CATEGORYID =
    this.HOST + "/api/ProjectSubCategory/List?ProjectCategoryId=";
  static readonly ALL_ACTIVITIES = this.HOST + "/api/Activity/List";
  static readonly ACTIVITY_UPDATE =
    this.HOST + "/api/Activity/Update/{activityId}";
  static readonly PARTNER_CREATION_URL = this.HOST + "/api/Partner/Add";
  static readonly BRANCH_CREATION_URL = this.HOST + "/api/ProjectStore/Add";
  static readonly PRODUCT_CREATION_URL = this.HOST + "/api/Product/Add";
  static readonly PRODUCT_DELETE_URL =
    this.HOST + "/api/Product/Delete/{productId}";
  static readonly PROJECT_OPEN_REQUEST_URL =
    this.HOST +
    "/api/Request/MyAdvancedRequests?Entity.ProjectId={projectId}&Entity.ApprovalStatuses=Draft";
  static readonly PROJECT_REQUEST_CREATE =
    this.HOST + "/api/Request/RequestEdit/{projectId}";
  static readonly PRODUCT_REQUEST_CREATE =
    this.HOST + "/api/ProductVersion/Add/{requestId}";
  static readonly PRODUCT_ATTACHMENT_REQUEST =
    this.HOST + "/api/ProductVersionAttachment/Add/{productVersionId}";
  static readonly PROJECT_REQUEST_SEND_FOR_APPROVAL =
    this.HOST + "/api/Request/SendForApproval/{requestId}";
  static readonly BRANCH_REQUEST_CREATE =
    this.HOST + "/api/ProjectVersionStore/Add/{requestId}";
  static readonly BRANCH_DELETE =
    this.HOST + "/api/ProjectStore/Delete/{branchId}";
  static readonly FILE_UPLOAD = this.HOST + "/api/File/PostSingleFile";
  static readonly PROJECT_REVIEW_CREATION_URL =
    this.HOST + "/api/ProjectReview/Add";
  static readonly PENDING_COMMENTS =
    this.HOST + "/api/ProjectReview/PendingList";
  static readonly APPROVE_COMMENT = this.HOST + "/api/ProjectReview/Approve";
  static readonly REJECT_COMMENT = this.HOST + "/api/ProjectReview/Reject";
  static readonly ATTACHMENT_REQUEST_CREATE =
    this.HOST + "/api/ProjectVersionAttachment/Add/{requestId}";
  static readonly REQUEST_ATTACHMENTS =
    this.HOST + "/api/ProjectVersionAttachment/List/{requestId}";
  static readonly PROJECT_DELETE_ATTACHMENT =
    this.HOST +
    "/api/ProjectVersionAttachment/Delete/{requestId}/{attachmentId}";
  static readonly CREATE_PROJECT_CHANGE =
    this.HOST + "/api/ProjectVersion/Update/{requestId}";
  static readonly DELETE_PROJECT_BRANCH_CHANGE =
    this.HOST + "/api/ProjectVersionStore/Remove/{requestId}/{attachmentId}";
  static readonly APPROVE_REQUEST =
    this.HOST + "/api/Approval/Approve/{requestId}";
  static readonly REJECT_REQUEST =
    this.HOST + "/api/Approval/Reject/{requestId}";
}
