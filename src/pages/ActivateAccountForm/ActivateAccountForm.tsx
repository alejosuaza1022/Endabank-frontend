import ApproveUserProps from "@components/ApproveUserTable/approveUserTable.interface";
import apiUrls from "../../constants/apiUrls";
import { useEffect } from "react";
import { getAxios } from "../../utils/axios";
import { ApproveUserTable } from "../../components/index";

const ActivateAccountForm = () => {

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGVqYW5kcm9zdWF6YS4xMDIyQGdtYWlsLmNvbSIsImV4cCI6MTY0OTE4MDcxMCwiaWF0IjoxNjQ5MTc5NTEwLCJ1c2VySWQiOjR9.qG6sNDRvU7wV6PnE_MOGW5uimaMs1SfEGkB1K1XXwqb8wpqXx3arwU7B8LouUfJuJsTi2l-v9j2-IYlkAVPM9Q";
  useEffect(() => {
    async function getData() {
      const response: Array<ApproveUserProps> = await getAxios(
        apiUrls.GET_USERS_TO_APPROVE_URL,
        token
      );
      console.log(response);
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
            <ApproveUserTable
              firstName="shoes and shoes"
              lastName=""
              email="shoes-shoes@yopmail.com"
              id="shoes-shoes@yopmail.com"
            ></ApproveUserTable>
            <ApproveUserTable
              firstName="Juan valdes"
              lastName=""
              email="julian.valdes@cofee.com"
              id="julian.valdes@cofee.com"
            ></ApproveUserTable>
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
