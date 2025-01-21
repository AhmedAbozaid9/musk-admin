import { getOrders, OrderTypes } from "@/api/orders/getOrders";
import Loading from "@/components/general/Loading";
import OrderDetails from "@/components/orders/OrderDetails";
import OrdersTable from "@/components/orders/OrdersTable";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<OrderTypes | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const handleSelectOrder = (order: OrderTypes) => {
    setSelectedOrder(order);
    setShowDetails(true);
  };

  const handleChangeStatus = () => {};

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-right">الطلبات</h1>
      {orders && orders?.length > 0 ? (
        <OrdersTable handleSelectOrder={handleSelectOrder} orders={orders} />
      ) : (
        <p className="text-right">لا توجد طلبات</p>
      )}
      {selectedOrder && (
        <OrderDetails
          key={selectedOrder._id}
          order={selectedOrder}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          handleChangeStatus={handleChangeStatus}
        />
      )}
    </div>
  );
};

export default OrdersPage;
