let num_1;
let num_2;

num_1 = Number(prompt("Digite o primeiro número:"));
num_2 = Number(prompt("Digite o segundo número:"));

const f_sum = (num_1, num_2) => {
  return num_1 + num_2;
};

const f_sub = (num_1, num_2) => {
  return num_1 - num_2;
};

const f_mult = (num_1, num_2) => {
  return num_1 * num_2;
};

const f_div = (num_1, num_2) => {
  return num_1 / num_2;
};

const f_mod = (num_1, num_2) => {
  return num_1 % num_2;
};

const f_even_or_not = (num_1, num_2) => {
  let soma = f_sum(num_1, num_2);
  if (f_mod(num_1, num_2) % 2 == 0) {
    alert(`A soma dos números é par: ${soma}`);
  } else alert(`A soma dos números é impar: ${soma}`);
};

const f_equal = (num_1, num_2) => {
  if (num_1 === num_2) {
    alert("Os némeros são iguais");
  } else alert("Os números são diferentes");
};

alert("A soma é: " + f_sum(num_1, num_2));
alert("A subtração é: " + f_sub(num_1, num_2));
alert("A multiplicação é: " + f_mult(num_1, num_2));
alert("A divisão dos números é: " + f_div(num_1, num_2));
alert("O resto da divisão é: " + f_mod(num_1, num_2));
f_even_or_not(num_1, num_2);
f_equal(num_1, num_2);
