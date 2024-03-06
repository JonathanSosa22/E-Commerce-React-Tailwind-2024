import axios from "axios";

const useAuth = () => {
  const createUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.error(error);
      });
  };

  const loginUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { createUser, loginUser };
};

export default useAuth;
