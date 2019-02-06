import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RestProvider {
  apiUrl = "http://localhost:27017/api";
  constructor(public http: HttpClient) {
    console.log("Hello RestProvider Provider");
  }

  getRecipes() {
    return new Promise(res => {
      this.http.get(this.apiUrl).subscribe(
        data => {
          res(data);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
