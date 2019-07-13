import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParaGeneratorService {
  constructor() {}
  genFirst() {
    console.log("service works");
  }
}
