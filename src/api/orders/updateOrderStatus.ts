import { axios } from "@/lib/axios";

export const updateOrderStatus = async (orderId: string, newStatus: string) => {
  const repsonse = await axios.post("updateOrderStatus", {
    orderId,
    newStatus,
  });
};
