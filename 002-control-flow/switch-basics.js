//* 📝 Contexto:
// Un sistema necesita mostrar el nombre del día basado en un número (1–7).

//* 📌 Reglas:
/*
1 → "Monday"
2 → "Tuesday"
3 → "Wednesday"
4 → "Thursday"
5 → "Friday"
6 → "Saturday"
7 → "Sunday"
otro → "Invalid day"
*/

//* 📋 Pseudocódigo:
//1. Crear función que reciba un número como argumento.
//2. Usar una estructura de control de flujo (switch) para determinar el día de la semana basado en el número.
//3. Retornar el nombre del día o un mensaje de error si el número no es válido.
//4. Llamar a la función con diferentes números para probar su funcionamiento.

function getDayOfWeek(dayNumber) {
  if (typeof dayNumber !== "number" || Number.isNaN(dayNumber))
    return "Invalid input: Please enter a valid number";
  if (dayNumber < 1 || dayNumber > 7)
    return "Invalid day. Please enter a number between 1 and 7.";

  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

console.log(getDayOfWeek(1)); // Output: "Monday"
console.log(getDayOfWeek(5)); // Output: "Friday"
console.log(getDayOfWeek(7)); // Output: "Sunday"
console.log(getDayOfWeek(0)); // Output: "Invalid day. Please enter a number between 1 and 7."
console.log(getDayOfWeek(8)); // Output: "Invalid day. Please enter a number between 1 and 7."
console.log(getDayOfWeek("3")); // Output: "Invalid input: Please enter a valid number"
console.log(getDayOfWeek(NaN)); // Output: "Invalid input: Please enter a valid number"
