import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParaGeneratorService {
  constructor() {}
  genFirst(soldier) {
    console.log("service works", soldier);
  }
}
