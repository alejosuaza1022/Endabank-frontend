import {Dispatch, SetStateAction} from "react";

interface IAuthProvider{
    auth: {
        currentUser: string;
        isApproved?:boolean;
        authorities?: string[];
        token?: string;
        email:string;
    };
    setAuth?: (auth:{currentUser:string,isApproved:boolean,authorities:string[],token:string,email:string}) => void;
    readCookie?: () => void;
    logOut?: () => void;
    loadedData?: boolean;
    setLoadedData?: (loadedData:boolean) => void;

}

// interface IStateLoadedData<T> {
//     value: T
//     setValue: Dispatch<SetStateAction<T>>
// }

export default IAuthProvider;
