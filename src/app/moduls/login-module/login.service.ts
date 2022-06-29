import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class loginService implements OnInit{
  constructor(private _http: HttpClient){

  }

checkValidity(userName:string,password:string,repeatPassword:string){
    //האם שם המשתמש קיים
    //האם הסיסמא זהות 
    //האם הסיסמאות לא קיימות
}
isExist(userName:string){
    
    return true;
}
getAllUserNames():Observable<string[]>{
    return this._http.get<string[]>("כתובת הגישה לפונקציית get  בserver");
}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}