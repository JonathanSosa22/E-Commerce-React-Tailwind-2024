/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedInLocal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedInLocal(true);
    } else {
      setIsLoggedInLocal(false);
    }
  }, []);

  const submit = async (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    loginUser(url, data);
    reset({
      email: "",
      password: "",
    });
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoggedInLocal(false);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn && (
        <div className="w-[90%] p-4 mx-auto mt-10 border-2 border-gray-200 md:max-w-[500px]">
          <h2 className="text-2xl text-red-400 font-bold text-center p-4">
            BIENVENIDO
          </h2>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
              className="w-[100px] h-[100px] my-5 object-contain mx-auto"
            />
          </div>
          <button
            className="bg-red-500 font-bold text-white p-4 w-full text-xl hover:text-green-500"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <div className="w-[90%] mx-auto mt-10 border-2 border-gray-200 md:max-w-[500px]">
          <h2 className="text-2xl text-red-400 font-bold text-center p-4">
            LOGIN
          </h2>
          <div className="text-center border-y-2 m-2">
            <h3 className="p-2 text-blue-400">
              You can try this user or register..
            </h3>
            <h4>
              <span className="font-bold">Email:</span> john@gmail.com
            </h4>
            <h4>
              <span className="font-bold">Password:</span> john1234
            </h4>
          </div>
          <form
            className="flex flex-col gap-4 p-4 capitalize max-w-[400px] mx-auto"
            onSubmit={handleSubmit(submit)}
          >
            <div className="flex flex-col gap-2 ">
              <label htmlFor="email">Email</label>
              <input
                className="border-2 border-black p-1"
                type="email"
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
            <button className="bg-red-500 font-bold text-white p-4 w-full text-xl hover:text-green-500">
              LOGIN
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
