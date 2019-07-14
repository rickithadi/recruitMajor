import { Injectable } from "@angular/core";
import comd from "./paragraphs/comd.json";
import enlistee from "./paragraphs/enlistee.json";
import { Certificate } from "./certificate";
@Injectable({
  providedIn: "root"
})
export class ParaGeneratorService {
  constructor() {
    // console.log(enlistee);
  }
  hold: string;
  cert = new Certificate("", "", "", "", "");
  adjectives = ["smart", "capable"];

  genFirst(soldier, count?) {
    this.cert.para1 = this.firstPara(
      soldier.rank,
      soldier.vocation,
      soldier.name,
      soldier.nric,
      count
    );
    console.log("cert is", this.cert);
    return this.cert.para1;
  }
  firstPara(rank, vocation, name, nric, count?) {
    this.hold =
      "soldier's name is " +
      name +
      " .His nric is " +
      nric +
      " and count is " +
      count;
    if (vocation.comd) {
      //add json fetch here
      this.hold = this.hold.concat(" fella is a comd");
    } else {
      //add json fetch here use refresh func for variety
      this.hold = enlistee.para1.paras[count].text;

      // this.hold = this.swapRank(this.hold, rank);
    }
    return this.hold;
  }
  swapAdj(para, options) {}
}
