import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-statistics-card",
  templateUrl: "./statistics-card.component.html",
  styleUrls: ["./statistics-card.component.scss"],
})
export class StatisticsCardComponent implements OnInit {
  @Input() title!: string;
  @Input() value!: number;
  @Input() route: string = "";

  constructor(private router: ActivatedRoute) {
    console.log(router.pathFromRoot);
  }

  ngOnInit(): void {}
}
