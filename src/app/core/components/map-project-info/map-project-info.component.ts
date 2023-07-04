import { ProjectTmpService } from "./../../services/project-tmp.service";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-map-project-info",
  templateUrl: "./map-project-info.component.html",
  styleUrls: ["./map-project-info.component.scss"],
})
export class MapProjectInfoComponent implements OnInit, OnChanges {
  @Output() closeEvent = new EventEmitter();
  @Output() renderRoute: any = new EventEmitter<any>();
  @Input() branchInfo: any;
  project: any;
  currentRole = this.userService.getUserRole();
  currentProject = sessionStorage.getItem("projectId");

  constructor(
    private projectService: ProjectTmpService,
    private modalService: NgbModal,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getProjectInfo();
  }

  getProjectInfo() {
    this.project = this.projectService.getProjectById(
      this.branchInfo.projectId
    );
  }

  closeInfoWindow() {
    this.closeEvent.emit();
  }

  routeToBranch() {
    this.renderRoute.emit(this.branchInfo);
  }

  open(confirmDeletion: any) {
    this.modalService
      .open(confirmDeletion, {
        ariaLabelledBy: "modal-basic-title",
        size: "lg",
        windowClass: "default-modal",
        centered: true,
      })
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
