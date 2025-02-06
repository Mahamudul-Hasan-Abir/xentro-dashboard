import { useParams } from "react-router-dom";
import { useUserDetailsQuery } from "../../../redux/api/userApi";
import Spinner from "../../../components/Spinner/Spinner";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdWeb,
  MdOutlineAirlineSeatIndividualSuite,
} from "react-icons/md";
import { SiGooglestreetview } from "react-icons/si";
import { PiCityLight } from "react-icons/pi";
import { RiFileZipLine } from "react-icons/ri";
import { BsGeoAlt } from "react-icons/bs";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading, error } = useUserDetailsQuery(id!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading user details.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen  bg-[#eef6ff]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#3c82f6]">{user?.name}</h1>
          <p className="text-gray-600">{user?.username}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Personal Information
            </h2>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <MdOutlineEmail className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlinePhone className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Phone:</strong> {user?.phone}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <MdWeb className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${user?.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user?.website}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Address</h2>
            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <SiGooglestreetview className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Street:</strong> {user?.address.street}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineAirlineSeatIndividualSuite className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Suite:</strong> {user?.address.suite}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <PiCityLight className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>City:</strong> {user?.address.city}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <RiFileZipLine className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Zipcode:</strong> {user?.address.zipcode}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <BsGeoAlt className="size-5 text-[#3c82f6]" />
                <p>
                  <strong>Geo:</strong> {user?.address.geo.lat},{" "}
                  {user?.address.geo.lng}
                </p>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Company</h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {user?.company.name}
              </p>
              <p>
                <strong>Catchphrase:</strong> {user?.company.catchPhrase}
              </p>
              <p>
                <strong>Business:</strong> {user?.company.bs}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
