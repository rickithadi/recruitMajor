import { Injectable } from "@angular/core";
import comd from "./paragraphs/comd.json";
import enlistee from "./paragraphs/enlistee.json";
@Injectable({
  providedIn: "root"
})
export class ParaGeneratorService {
  constructor() {
    // console.log(enlistee);
  }
  hold: any;
  adjectives = ["smart", "capable"];

  generate(soldier, count?) {
    //check which para chekc with quan!!
   return 'sabar';
  }
  firstPara(rank,  name, nric, count?) {
    if (rank.comd) {
      //add json fetch here
      this.hold = this.hold.concat(" fella is a comd");
    } else {
      //add json fetch here use refresh func for variety
      this.hold = {
        text: enlistee.para1.paras[count].text,
        key: enlistee.para1.keywords,
        rep: enlistee.para1.replacement
      };

    }
    return this.hold;
  }
  swapAdj(para, options) {}
}
