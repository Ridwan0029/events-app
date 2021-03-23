import { Injectable } from "@angular/core";

declare let toastr:any

@Injectable()
export class ToastrService {
    successss(message: string, title?: string) {
        toastr.success(message, title)
    }
    infooo(message: string, title?: string) {
        toastr.info(message, title)
    }
    warninggg(message: string, title?: string) {
        toastr.warning(message, title)
    }
    errorrr(message: string, title?: string) {
        toastr.error(message, title)
    }
}