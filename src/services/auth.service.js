const AuthService = {
  login: (credentials) => {
    return axios.post("http://localhost:3000/auth/login", credentials);
  },
  saveTokenInLocalStorage: (token) => {
    localStorage.setItem("auth", token);
  },
};

export default AuthService;
