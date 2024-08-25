// task 1
let name = "Maqsat";
let age = 22;
alert("Confirm: name? age?" + name + " " + age);

// task 2
let num1 = 4;
let num2 = 3;
console.log(num1 % num2);


// task 3
let massage = confirm("Получать уведомление?");
console.log(massage);

// task 4
let isTrue = prompt("Ваш возраст?");
console.log(!!isTrue);

// task 5
let number = prompt("Введите число:");
alert(number ** 3);

// task 6
let text1 = "Republic";
let text2 = "Kazakhstan";
alert(text1 + " " + text2);

// task 7
let ber1 = +prompt("Введите 1-ое число");
let ber2 = +prompt("Введите 2-ое число");
let ber3 = +prompt("Введите 3-ие число");
let average = (ber1 + ber2 + ber3) / 3;
alert("Среднее значение трех числе: " + average);

// task 8
let hours = +prompt("Время");
let minutes = +prompt("Минуты");
let seconds = +prompt("секунды");
let totalSeconds = ((hours * 3600) + (minutes * 60) + seconds);
alert("Общее количество секунд: " + totalSeconds);

// task 9
let celsia = +prompt();
let fahrenheit = (celsia * 9/5) + 32;
let kelvin = celsia + 273.15;
alert("Температура в фаренгейтах: " + fahrenheit + " Температура в кельвинах: " + kelvin);

// task 10
let radius = +prompt("Радиус круга m")
let area = Math.PI * radius *radius;
alert("Площадь круга: " + area)
