/*
Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
число и считаете. Результат надо вывести на страницу с помощью alert.

*/
let euroRate = 90.57;
let dollarRate = 74.93;
let question = "Укажите конвертируемую сумму в рублях";

let askUser = () => {
  let answer = prompt(question);

  if (answer === null || answer === "") {
    alert("Вы не указали сумму!");
    askUser();
    return;
  }

  let parsedAnswer = parseInt(answer, 10);
  let isNotANumber = Number.isNaN(parsedAnswer);

  if (isNotANumber) {
    alert("Ответ не является числом");
    askUser();
    return;
  }

  let resultInEuro = (parsedAnswer / euroRate).toFixed(2);
  let resultInDollar = (parsedAnswer / dollarRate).toFixed(2);
  let result = `Результат в евро ${resultInEuro}, результат в долларах ${resultInDollar}`;
  alert(result);
}

askUser();
