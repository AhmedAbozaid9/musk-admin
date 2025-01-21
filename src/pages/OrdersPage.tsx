import { getOrders } from "@/api/orders/getOrders";
import Loading from "@/components/general/Loading";
import OrdersTable from "@/components/orders/OrdersTable";
import { useQuery } from "@tanstack/react-query";

const OrdersPage = () => {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      {" "}
      <h1 className="text-3xl font-bold text-right">الطلبات</h1>
      {orders && orders?.length > 0 ? (
        <OrdersTable orders={orders} />
      ) : (
        <p className="text-right">لا توجد طلبات</p>
      )}
    </div>
  );
};

export default OrdersPage;
