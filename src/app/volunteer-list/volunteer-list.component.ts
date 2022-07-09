import { Component, OnInit } from "@angular/core";

import { Stats } from "../entities/stats.entity";
import { ListService } from "../services/list.service";

@Component({
  selector: "app-volunteer-list",
  templateUrl: "./volunteer-list.component.html",
  styleUrls: ["./volunteer-list.component.scss"],
})
export class VolunteerListComponent implements OnInit {
  wishes: any[] = [];
  numberWishes: number = 0;
  message: string = "";
  application: Stats;
  discussion: Stats;
  waiting_association_validation: Stats;
  waiting_manager_validation: Stats;
  in_progress: Stats;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getStats().subscribe(
      (result) => {
        this.numberWishes = result.reduce((total, obj) => obj.count + total, 0);
        this.application = result.filter(
          (obj) => obj.status === "APPLICATION"
        )[0];
        this.discussion = result.filter(
          (obj) => obj.status === "DISCUSSION"
        )[0];
        this.waiting_association_validation = result.filter(
          (obj) => obj.status === "WAITING_ASSOCIATION_VALIDATION"
        )[0];
        this.waiting_manager_validation = result.filter(
          (obj) => obj.status === "WAITING_MANAGER_VALIDATION"
        )[0];
        this.in_progress = result.filter(
          (obj) => obj.status === "IN_PROGRESS"
        )[0];
      },
      (err) => {
        switch (err) {
          case 404:
            this.message =
              "Something is wrong, please check your API address, the parameters of the query and their formats or contact us";
            break;
          default:
            this.message = "something is wrong, please contact us";
        }
      }
    );

    this.listService.getWishes().subscribe(
      (result) => {
        this.wishes = result;
      },
      (err) => {
        switch (err) {
          case 404:
            this.message =
              "Something is wrong, please check your API address, the parameters of the query and their formats or contact us";
            break;
          default:
            this.message = "something is wrong, please contact us";
        }
      }
    );
  }

  getWishByFilter(status: string) {
    this.listService.getWishByFilter(status).subscribe(
      (result) => {
        this.wishes = result;
      },
      (err) => {
        switch (err) {
          case 404:
            this.message =
              "Something is wrong, please check your API address, the parameters of the query and their formats or contact us";
            break;
          default:
            this.message = "something is wrong, please contact us";
        }
      }
    );
  }
}
