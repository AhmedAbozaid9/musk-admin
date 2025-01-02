import { axios } from "@/lib/axios";

export const login = async (email: string, password: string) => {
  const { data } = await axios.post("/signIn", { email, password });
  return data.data;
};
