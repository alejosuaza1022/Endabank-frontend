import {SectionTitle} from "../../components/index";
import Cookies from "js-cookie";
import axios from "axios";
import apiUrls from "../../constants/apiUrls";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../contexts/AuthProvider";

const UserGeneralInfo = () => {

    const {
        auth: { token },
    } = useContext(AuthContext);

    const defaultState = {
        userGeneralInfo:{
            identifierType: '',
            identifier: '',
            firstName:'',
            lastName: '',
            email: ''
        }
    };

    const [generalInfo, setGeneralInfo] = useState(defaultState.userGeneralInfo);
    const [activeComponent, setActiveComponent] = useState(false);
    const [error, setError] = useState("");

    const getCurrentUserGeneralInfo= async () => {
        try{
            const token = Cookies.get('token');

            const res = await axios.get(`${apiUrls.GET_USER_GENERAL_INFO}`,
                {
                    headers: {'Authorization': 'Bearer ' + token}
                }
            );

            const identifierType = res.data.identifierName;
            const identifier = res.data.identifier;
            const firstName = res.data.firstName;
            const lastName = res.data.lastName;
            const email = res.data.email;

            setGeneralInfo({identifier,identifierType,firstName,lastName,email})

        } catch (err) {
            if(err instanceof Error) setError(err.message)
        } finally {
            setActiveComponent(true)
        }




    }

    useEffect(() => {
        getCurrentUserGeneralInfo()
        console.log(generalInfo.identifierType)
    }, [token]);


    return(
        <div>
            <SectionTitle title="General information"/>
            <div>
                <ul>
                    <li>Name: {generalInfo.firstName +" "+ generalInfo.lastName} </li>
                    <li>Document type: {generalInfo.identifierType} </li>
                    <li>Document id: {generalInfo.identifier}</li>
                    <li>Email: {generalInfo.email}</li>
                </ul>
            </div>
        </div>
    );
}

export default UserGeneralInfo;