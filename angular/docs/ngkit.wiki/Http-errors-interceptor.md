`src/app/core/errors/http-errors.interceptor.ts`
## Using Http errors interceptor
Import `http-errors.interceptor.ts` in the app.module.ts.

`src/app/app.module.ts`
```
import { HttpErrorsInterceptor } from '@app/core/errors/http-errors.interceptor';

@NgModule({
  declarations: [...],
  imports: [...],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true },
  ],
})
```