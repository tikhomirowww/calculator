while (true) {
let ask = prompt('Выберите операцию: (+)/(-)/(*)/(/)');
let num1 = +prompt('Первое число');
let num2 = +prompt('Второе число');

if (ask == '+') {
    alert(num1 + num2);
}

if (ask == '-') {
    alert(num1 - num2);
}

if (ask == '*') {
    alert(num1 * num2);
}

if (ask == '/') {
    alert(num1 / num2);
} i = +prompt("want to continue? no(1)")
if (i == 1) {
    break;
}
}