import axios from "./api";

// GET all team members
export const fetchTeam = async () => {
  return axios.get("/team");
};

// CREATE team member
export const createTeam = async (payload) => {
  return axios.post("/team", payload);
};

// DELETE team member
export const deleteTeam = async (id) => {
  return axios.delete(`/team/${id}`);
};
