import { Request } from 'Data/API/Network';
import { ILoginUserPayload, IRegisterUserPayload } from 'Interfaces';

export const loginUser = (payload: ILoginUserPayload, token: string) => {
    return Request("login/", token, "POST", undefined, payload )
}

export const registerUser = (payload: IRegisterUserPayload, token: string) => {
    return Request("registar/", token, "POST", undefined, payload)
}