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

  getDateDiff(dateBegin: string, dateEnd: string) {
    let time = new Date(dateEnd).getTime() - new Date(dateBegin).getTime();
    let h = Math.floor(time / 1000 / 60 / 60);
    let m = Math.floor((time / 1000 / 60 / 60 - h) * 60);
    return h + "h" + m;
  }
}
