import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { AuthService } from "../service/auth/auth.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authService.userSubject.value
        if (token) {
            req = req.clone({
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                })
            })
        } else {
            this.router.navigateByUrl('/login')
            return EMPTY;
        }
        return next.handle(req)
    }
}