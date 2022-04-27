import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { FbAuthResponse, User } from "../../../shared/interface";
import { Observable} from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
@Injectable ()

export class AuthService {
    constructor(private http: HttpClient) {

    }

    get token(): string {
        return ''
    }

    login(user: User): Observable<FbAuthResponse> {
        user.returnSecureToken = true;
        return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
            .pipe(
                tap(this.setToken)
            )
    }
    logout() {

    }

    isAuthenticated():boolean {
        return !!this.token
    }

    private setToken(response: FbAuthResponse) {
        console.log(response)
    }
}