"use strict";
if (confirm("Почати тестування?")) {
  let userDate1 = {
    day: 15,
    month: 8,
    year: 2022,
  };
  /**
   * Обчислює рік, який буде через N місяців від заданої дати.
   *
   * @param date - Об'єкт, що містить місяць і рік (наприклад, { month: 5, year: 2023 }).
   * @param N - Кількість місяців, яку потрібно додати.
   * @returns Рік після додавання N місяців.
   */
  function getWhatYear({ month, year }, N) {
    return Math.floor((year * 12 + (month - 1 + N)) / 12);
  }
  const monthNumber = 17;
  document.write(
    `Через ${monthNumber} місяців буде ${getWhatYear(
      userDate1,
      monthNumber
    )} рік.`
  );
}
