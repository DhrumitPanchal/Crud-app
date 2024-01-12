import React, { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function HomePage() {
  const [users, setUsers] = useState([]);

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((result) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== id));
        toast.success(result.data.msg, { position: "top-right" });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getall")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center items-center h-screen w-full  bg-blue-100">
      <div className=" bg-white p-[2rem] rounded-[.6rem]">
        <Link to={"/add"}>
          <div className="cursor-pointer mb-[1rem] py-[.4rem] px-[1.4rem] w-fit rounded-[.4rem] transition-colors duration-300 font-semibold  bg-fuchsia-900 hover:bg-fuchsia-950 text-white">
            Add User
          </div>
        </Link>

        <table className="">
          <thead>
            <tr className="bg-blue-900 text-white font-semibold">
              <td>S.No</td>
              <td>User Name</td>
              <td>User Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {users.map((e, index) => (
              <tr key={e._id}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <div className="flex gap-[.4rem]">
                    <div
                      onClick={() => deleteUser(e._id)}
                      className=" flex justify-center items-center text-white cursor-pointer m-[.2rem] h-[1.8rem] w-[1.8rem] rounded-[.2rem] bg-red-600"
                    >
                      <FaTrash />
                    </div>
                    <Link to={`/update/` + e._id}>
                      <div className=" flex justify-center items-center text-white cursor-pointer m-[.2rem] h-[1.8rem] w-[1.8rem] rounded-[.2rem] bg-green-500">
                        <FaPencilAlt />
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
