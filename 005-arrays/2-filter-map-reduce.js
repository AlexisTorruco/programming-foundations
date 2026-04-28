//* “Necesito obtener el total de ventas de pedidos que ya fueron pagados para mostrarlo en el dashboard financiero.”
//TODO: Aplicar buenas prácticas; pseudocódigo, comentarios, nombres descriptivos, etc.

const orders = [
  { id: 1, amount: 100, paid: true },
  { id: 2, amount: 50, paid: false },
  { id: 3, amount: 200, paid: true },
];

function calculateTotalSales(orders) {
  //1. Filtrar los pedidos que ya fueron pagados
  const paidOrders = orders.filter((order) => order.paid);

  //2. Obtener el monto de cada pedido pagado
  const amounts = paidOrders.map((order) => order.amount);

  //3. Sumar los montos para obtener el total de ventas
  const totalSales = amounts.reduce((total, amount) => total + amount, 0); //Inicializamos el acumulador en 0. Basicamente haría: 0 + 100 = 100, luego 100 + 200 = 300

  //4. Retornar el total de ventas
  return totalSales;
}

//5. Llamar a la función y mostrar el resultado
console.log("Total sales: " + calculateTotalSales(orders));
