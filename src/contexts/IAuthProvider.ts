
interface IAuthProvider{
    auth: {
        currentUser: string;
        token: string;
        isApproved: boolean;
        rol: string;
    };
    setAuth?: (auth:{currentUser:string, token:string,isApproved:boolean,rol:string}) => void;
}

export default IAuthProvider;