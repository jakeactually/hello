import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap, finalize } from "rxjs";

export const loading = new BehaviorSubject(false);

@Injectable({
    providedIn: 'root'
})
export class Loader implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        loading.next(true);
        
        return next.handle(req).pipe(
            finalize(() => loading.next(false))
        );
    }
}
