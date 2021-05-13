import axios from "axios";

const CasesService = {
  getAll: () => {
    return axios.get("http://localhost:3000/cases", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGVtYWlsLmNvbSIsImlhdCI6MTYyMDQxMjYzOH0.A9zOE91HOaqVQZ_SZMfZLkSy7d1gMVS8AnhYrMiIhZs",
      },
    });
  },
};

export default CasesService;
