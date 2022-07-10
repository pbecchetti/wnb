import { Pipe, PipeTransform } from "@angular/core";
/*
 * Transform the status to a human readable string
 */
@Pipe({ name: "statusTransform" })
export class StatusTransformPipe implements PipeTransform {
  transform(text: string): string {
    let newText = "";
    switch (text) {
      case "APPLICATION": {
        newText = "Candidature";
        break;
      }
      case "DISCUSSION": {
        newText = "Echange";
        break;
      }
      case "WAITING_ASSOCIATION_VALIDATION": {
        newText = "Date à valider";
        break;
      }
      case "WAITING_MANAGER_VALIDATION": {
        newText = "En attente du manager";
        break;
      }
      case "IN_PROGRESS": {
        newText = "En cours";
        break;
      }
      case "USER_HAS_PARTICIPATED": {
        newText = "A participé";
        break;
      }
      case "CANCELLED": {
        newText = "Annulé / refusé / non finalisé";
        break;
      }
    }
    return newText;
  }
}
