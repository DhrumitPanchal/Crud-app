import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function AddUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const hendleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", data)
      .then((result) => {
        toast.success(result.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center h-screen w-full  bg-blue-100">
      <form
        onSubmit={submitForm}
        className="w-[30rem] flex flex-col gap-[1.2rem] bg-white p-[3rem] rounded-[.6rem]"
      >
        <Link to={"/"}>
          <h2 className="text-[1.2rem]">Back</h2>
        </Link>
        <h2 className="text-[1.4rem] text-black/80 font-bold">Add new user</h2>
        <div className="flex flex-col gap-[.2rem]">
          <h2>Name</h2>
          <input
            className="px-[.8rem] py-[.2rem] rounded-[.4rem] border-[1px] focus:shadow-[0_0_2px_#701a75] focus:border-[#701a75] border-black "
            type="text"
            name="name"
            onChange={(e) => hendleInput(e)}
            placeholder="Name"
            required
          />
        </div>

        <div className="flex flex-col gap-[.2rem]">
          <h2>Email</h2>
          <input
            className="px-[.8rem] py-[.2rem] rounded-[.4rem] border-[1px] focus:shadow-[0_0_2px_#701a75] focus:border-[#701a75] border-black "
            type="email"
            name="email"
            onChange={(e) => hendleInput(e)}
            placeholder="Email"
            required
          />
        </div>

        <div className="flex flex-col gap-[.2rem]">
          <h2>Password</h2>
          <input
            className="px-[.8rem] py-[.2rem] rounded-[.4rem] border-[1px] focus:shadow-[0_0_2px_#701a75] focus:border-[#701a75] border-black "
            type="text"
            name="password"
            onChange={(e) => hendleInput(e)}
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-[1rem] px-[1rem] py-[.4rem] text-white font-semibold transition-colors duration-300 hover:bg-fuchsia-900 bg-fuchsia-800"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
