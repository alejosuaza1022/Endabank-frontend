import ApproveUserProps from "@components/ApproveUserTable/approveUserTable.interface";
import apiUrls from "../../constants/apiUrls";
import { useEffect, useState } from "react";
import { getAxios } from "../../utils/axios";
import { ApproveUserTable } from "../../components/index";

const ActivateAccountForm = () => {
  const [list, setList] = useState<Array<ApproveUserProps>>([]);
  const [appr, setAppr] = useState(Boolean);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbnRob255LmdhbGxlZ29AZW5kYXZhLmNvbSIsImV4cCI6MTY0OTI2MDUyNSwiaWF0IjoxNjQ5MjU5MzI1LCJ1c2VySWQiOjV9.QDIrF4v8s_ffVhSkqktF3Cus2g0uSitpbqVQ_mGNlPQu6hH-8kLare39hhnUoOeLcXsn1E4ZrmgoEH_Ax0Uc7g";
  useEffect(() => {
    async function getData() {
      setAppr(true);
      try {
        const response: Array<ApproveUserProps> = await getAxios(
          apiUrls.GET_USERS_TO_APPROVE_URL,

          token
        );

        setList(response);
      } catch (error) {
        alert("Invalid token to access information");
        setAppr(false);
      }
    }
    getData();
  }, []);
  return (
    <div>
      <header className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-xl">User Approval</span>
      </header>

      <div className="flex w-full justify-center mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Approved
              </th>
            </tr>
          </thead>
          <tbody>
            {appr ? (
              list.map((value, key) => (
                <ApproveUserTable
                  firstName={value.firstName}
                  lastName={value.lastName}
                  email={value.email}
                  id={value.id}
                  approved={value.approved}
                  key={value.id}
                  token={token}
                ></ApproveUserTable>
              ))
            ) : (
              <ApproveUserTable
                firstName="error"
                lastName="error"
                email="error"
                id="error"
                key="error"
              ></ApproveUserTable>
            )}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px w-full justify-center mt-10">
          <li>
            <a
              href="#"
              className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ActivateAccountForm;
