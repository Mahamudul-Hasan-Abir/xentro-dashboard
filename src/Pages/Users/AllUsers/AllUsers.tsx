import { FaEye } from "react-icons/fa";
import { useGetUsersQuery } from "../../../redux/api/userApi";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  catchPhrase: string; // Fixed typo
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
  const [filterData, setFilterData] = useState<TUser[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Update filtered data when `data` or `searchTerm` changes
  useEffect(() => {
    if (data) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const newFilterData = data.filter((user: TUser) =>
        user.name.toLowerCase().startsWith(lowerCaseSearchTerm)
      );
      setFilterData(newFilterData);
    }
  }, [data, searchTerm]);

  if (error) {
    console.error("Error fetching users:", error);
    return <p className="text-red-500">Failed to load users.</p>;
  }

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  return (
    <div className="container max-w-[800px] p-2 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">All Users</h2>

      {/* Search Input */}
      <div className="mt-5">
        <p className="mb-2 font-semibold">Search User By Name:</p>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-10 rounded-lg p-5 border-[#e2e8f0] border-[1px]"
          type="text"
          placeholder="Enter user name..."
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto border-[1px] border-gray-200 rounded-lg max-h-[500px] overflow-y-auto mt-4">
        <table className="min-w-full text-xs">
          <thead className="sticky top-0 z-10 border-b-[1px] border-gray-200 bg-white">
            <tr className="text-left text-xl text-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">City</th>
              <th className="p-2 md:text-right">View Details</th>
            </tr>
          </thead>
          <tbody>
            {filterData.length > 0 ? (
              filterData.map((user: TUser) => (
                <tr
                  key={user.id}
                  className="border-b text-lg border-opacity-20 border-gray-200"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <p>{user.address.city}</p>
                    <p className="text-sm">{user.address.street}</p>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center items-center">
                      <Link to={`${user.id}`}>
                        <FaEye className="size-5 text-blue-400 cursor-pointer" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
