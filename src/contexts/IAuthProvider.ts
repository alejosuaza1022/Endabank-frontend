interface IAuthProvider{
    auth: {
        currentUser: string;
        isApproved?:boolean;
        authorities?: string[];
        token?: string;
    };
    setAuth?: (auth:{currentUser:string,isApproved:boolean,authorities:string[]}) => void;
    readCookie?: () => void;
    logOut?: () => void;
    lostData?: number;
    setLostData?: (lostData:number) => void;

}

export default IAuthProvider;
