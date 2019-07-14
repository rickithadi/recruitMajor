import { Injectable } from "@angular/core";
import comd from "./paragraphs/comd.json";
import enlistee from "./paragraphs/comd.json";
import { Certificate } from "./certificate";
@Injectable({
  providedIn: "root"
})
export class ParaGeneratorService {
  constructor() {}
  hold: string;
  cert = new Certificate("", "", "", "", "");

  genFirst(soldier) {
    console.log(soldier);
    this.cert.para1 = this.firstPara(
      soldier.vocation,
      soldier.name,
      soldier.nric
    );
    console.log(this.cert);
    return this.cert.para1;
  }
  firstPara(vocation, name, nric) {
    this.hold = "soldier name is " + name + " nric is " + nric + " and";
    if (vocation.comd) {
      this.hold = this.hold.concat(" fella is a comd");
    } else {
      this.hold = this.hold.concat(" fella is a man");
    }
    return this.hold;
  }
}
