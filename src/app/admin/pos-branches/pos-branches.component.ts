import { Branch } from "./../../core/models/branch.model";
import { BranchService } from "./../../core/services/branch.service";
import { Component, OnInit } from "@angular/core";
import { Store } from "src/app/core/models/store.model";

@Component({
  selector: "app-pos-branches",
  templateUrl: "./pos-branches.component.html",
  styleUrls: ["./pos-branches.component.scss"],
})
export class PosBranchesComponent implements OnInit {
  bankBranches: Branch[] = [];
  pages: number[] = [1, 2];
  currentPage: number = 1;

  constructor(private branchService: BranchService) {}

  ngOnInit(): void {
    this.getBankBranches();
  }

  getBankBranches() {
    this.branchService.getBankBranches(this.currentPage).subscribe((stores) => {
      this.bankBranches = stores.Rows;
      this.setPagesArray(stores.PaginationInfo.TotalPagesCount);
    });
  }

  setPagesArray(pagesCount: number) {
    this.pages = [];
    this.pages = Array(pagesCount + 1)
      .fill(0)
      .map((x, i) => {
        if (i == 0) {
          return 1;
        } else {
          return i;
        }
      });
    this.pages.shift();
  }

  nextPage() {
    if (this.pages.length > this.currentPage) {
      this.currentPage++;
      this.getBankBranches();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getBankBranches();
    }
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.getBankBranches();
  }
}
