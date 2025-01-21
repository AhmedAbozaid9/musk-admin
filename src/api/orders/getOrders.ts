import { axios } from "@/lib/axios";

export interface OrderTypes {
  _id: string;
  user: string;
  cartItems: CartItem[];
  addresses: Address[];
  totalOrderPrice: number;
  paymentMethod: string; // e.g., 'Cash', 'Card', etc.
  orderStatus: string; // e.g., 'Pending', 'Completed', etc.
  deliveryDate: string; // ISO string or human-readable date
  orderNumber: string;
  createdAt: string; // ISO string or human-readable date
  updatedAt: string; // ISO string or human-readable date
  __v: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  price: number;
  _id: string;
}

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageCover: string;
  id: string;
}

interface Address {
  _id: string;
  fullName: string;
  phoneNumber: string;
  alternativePhoneNumber?: string;
  countryCode: string;
  region: string;
  addressTitle: string;
  detailedAddress: string;
}

export const getOrders = async (): Promise<OrderTypes[]> => {
  const { data } = await axios.get("/getAllOrdersForAdmin");
  return data.orders;
};
