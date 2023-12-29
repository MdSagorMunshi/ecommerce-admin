import prismadb from "@/lib/prismadb";

export const getTotalRevenue = async (storeId: string) => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true
    },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    }
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.orderItems.reduce((orderSum, item) => {
      // Use Number() or parseFloat() to convert the price to a number
      const itemPrice = Number(item.product.price);
      // Or: const itemPrice = parseFloat(item.product.price);

      return orderSum + itemPrice;
    }, 0);
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
