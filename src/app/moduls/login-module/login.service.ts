import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user";

@Injectable()
export class loginService implements OnInit {
    constructor(private _http: HttpClient) {

    }

    checkValidity(userName: string, password: string, repeatPassword: string): Boolean {
        //TODO
        //implement this function;
        //האם שם המשתמש קיים
        //האם הסיסמא זהות 
        //האם הסיסמאות לא קיימות
        return false;
    }
    isExist(userName: string) {

        return true;
    }
    getAllUserNames(): Observable<string[]> {
        return this._http.get<string[]>("כתובת הגישה לפונקציית get  בserver");
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    addUser(user: User) {
//TODO
//http request add new user;
    }

}

