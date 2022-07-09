import { Component, OnInit } from "@angular/core";

import { Stats } from "../entities/stats.entity";
import { ListService } from "../services/list.service";

@Component({
  selector: "app-volunteer-list",
  templateUrl: "./volunteer-list.component.html",
  styleUrls: ["./volunteer-list.component.scss"],
})
export class VolunteerListComponent implements OnInit {
  // stats: any[] = [];
  numberWishes: number = 0;
  message: string = "";
  application: Stats;
  discussion: Stats;
  waiting_assoc: Stats;
  waiting_manager: Stats;
  progress: Stats;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getStats().subscribe(
      (result) => {
        console.log(result);
        this.numberWishes = result.reduce((total, obj) => obj.count + total, 0);
        // this.stats = result;
        this.application = result.filter(
          (obj) => obj.status === "APPLICATION"
        )[0];
        this.discussion = result.filter(
          (obj) => obj.status === "DISCUSSION"
        )[0];
        this.waiting_assoc = result.filter(
          (obj) => obj.status === "WAITING_ASSOCIATION_VALIDATION"
        )[0];
        this.waiting_manager = result.filter(
          (obj) => obj.status === "WAITING_MANAGER_VALIDATION"
        )[0];
        this.progress = result.filter((obj) => obj.status === "IN_PROGRESS")[0];
        // this.numberTrips = resultTrips.search_info.count;
        // this.trips = resultTrips.trips;
        // this.trips.forEach((trip) => {
        //   this.searchService
        //     .getTrip(trip.link.split('id=')[1])
        //     .subscribe((resultTrip) => {
        //       trip.depart = resultTrip.departure_place.address;
        //       trip.arrival = resultTrip.arrival_place.address;
        //       trip.seatLefts = resultTrip.seats_left;
        //     });
        // });
      },
      (err) => {
        switch (err) {
          case 400:
            this.message =
              "Something is wrong, please check the parameters of the query and their formats or contact us";
            break;
          case 404:
            this.message =
              "Something is wrong, please check your API address or contact us";
            break;
          default:
            this.message = "something is wrong, please contact us";
        }
      }
    );
  }
}
