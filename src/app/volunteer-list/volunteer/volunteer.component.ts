import { Component, Input, OnInit } from "@angular/core";
import { Wish } from "src/app/entities/wish.entity";

@Component({
  selector: "app-volunteer",
  templateUrl: "./volunteer.component.html",
  styleUrls: ["./volunteer.component.scss"],
})
export class VolunteerComponent implements OnInit {
  @Input() wish: Wish;

  constructor() {}

  ngOnInit() {}
}
