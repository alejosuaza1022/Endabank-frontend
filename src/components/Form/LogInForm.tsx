import {Input} from "../index"

const LogInForm = ()=>{
    return(
        <div className="flex justify-center w-1/2 mt-10">
            <div className="p-4 container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
                <form>
                    <Input type="text" id="email_login" label="Email"/>
                    <Input type="password" id="password_login" label="Password"/>
                    <button
                        type="submit"
                        className="text-white color-endabank focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        Log In
                    </button>
                    <div className="m-5 text-right text-sm" >
                        <a className="decoration-0" href="www.nowhere.com">Forgot password?</a>
                    </div>
                </form>
                <div className="text-center text-sm m-0 border-t-2 border-gray-300 pt-5">
                    New merchant?
                    <a href="www.nowhere.com">create an account</a>
                </div>

            </div>
        </div>
    )
}

export default LogInForm;