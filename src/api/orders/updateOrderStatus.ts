import { axios } from "@/lib/axios";

export const updateOrderStatus = async (orderId: string, newStatus: string) => {
  const response = await axios.post("updateOrderStatus", {
    orderId,
    newStatus,
  });
  return response.data;
};
