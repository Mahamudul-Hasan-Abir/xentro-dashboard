import { FaEye } from "react-icons/fa";
import { useGetUsersQuery } from "../../../redux/api/userApi";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
type TCompany = {
  name: string;
  catchPrase: string;
  bs: string;
};
type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
};
const AllUsers = () => {
  const { data, error, isLoading, isFetching } = useGetUsersQuery("");
  if (error) {
    console.log(error);
  }
  if (isFetching) {
    return <Spinner></Spinner>;
  }
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800 max-w-full">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">All Users</h2>
      <div className="overflow-x-auto border-[1px] border-gray-200 rounded-2xl ">
        <div>
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="sticky top-0 z-10 border-b-[1px] border-gray-200 ">
              <tr className="text-left text-xl text-gray-700">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">City</th>
                <th className="p-3 md:text-right">View Details</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user: TUser) => (
                <tr
                  key={user?.id}
                  className="border-b text-lg border-opacity-20 border-gray-200 "
                >
                  <td className="p-3">
                    <p>{user?.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.email}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.address?.city}</p>
                    <p>
                      <span className="text-sm">{user?.address?.street}</span>
                    </p>
                  </td>

                  <td className="p-3">
                    <div className="flex justify-center items-center">
                      <Link to={`${user?.id}`}>
                        <FaEye className="size-5 text-blue-400 cursor-pointer"></FaEye>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
