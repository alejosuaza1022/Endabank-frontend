import ApproveUserProps from "@components/ApproveUserTable/approveUserTable.interface";
import apiUrls from "../../constants/apiUrls";
import { useEffect, useState } from "react";
import { getAxios } from "../../utils/axios";
import { ApproveUserTable } from "../../components/index";
const ActivateAccountForm = () => {
  const [list, setList] = useState<Array<ApproveUserProps>>([]);
  const [appr, setAppr] = useState(Boolean);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbnRob255LmdhbGxlZ29AZW5kYXZhLmNvbSIsImV4cCI6MTY0OTg2Mzg4OSwiaWF0IjoxNjQ5ODYyNjg5LCJ1c2VySWQiOjV9.F-08ShjxIBT8Qh8IDGsU-OtNy9Q9RnfIg5EnFNEzhp-jbsPIUjD58HEQNQ0OifTUGDDEWCtCw-LK_kf3Kk9y5A";
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
    </div>
  );
};

