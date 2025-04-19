import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HandleErrorForBackEndInterceptor } from "./handle-error-for-back-end.interceptor";
import { LoaderInterceptor } from "./loader.interceptor";



export const HttpInterceptorProviders = [
  {
    provide:HTTP_INTERCEPTORS,useClass:HandleErrorForBackEndInterceptor,multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true
  }
]