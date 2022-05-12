import { HttpClient, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Post, FbCreateResponse } from "./interface";

@Injectable({providedIn: 'root'})

export class PostsService {
    constructor(private http: HttpClient) {}

    create(post: Post): Observable<Post> {
        return this.http.post<FbCreateResponse>(`${environment.fbDbUrl}/posts.json`, post).pipe(
            map((response: FbCreateResponse) => {
                return {
                    ...post,
                    id: response.name,
                    date: new Date(post.date)
                }
            })
        )
    }
}