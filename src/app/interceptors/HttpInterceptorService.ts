import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    /**
     * Constructor e la clase.
     */
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = "eyJlbWFpbCI6ImVsbWVyLmxvcGV6dkBnbWFpbC5jb20iLCJwYXNzIjoiNTY5ODA5In0="
        request = request.clone({
            setHeaders: {
                Authorization: authToken
            }
        });
        return next.handle(request);
    }
}