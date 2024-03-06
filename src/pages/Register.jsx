/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser } = useAuth();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-10 border-2 border-gray-200">
        <form
          className="flex flex-col gap-4 p-4 capitalize max-w-[400px] mx-auto"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="firstName">
              Firs Name
            </label>
            <input
              className="border-2 border-black p-1"
              type="text"
              id="firstName"
              {...register("firstName")}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border-2 border-black p-1"
              type="text"
              id="lastName"
              {...register("lastName")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 border-black p-1"
              type="emnail"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="border-2 border-black p-1"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              className="border-2 border-black p-1"
              type="number"
              id="phone"
              {...register("phone")}
            />
          </div>
          <button className="bg-red-500 font-bold text-white p-4 w-full text-xl hover:text-green-500">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
