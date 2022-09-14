let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Método Push Próprio

const valorPush = prompt("Qual valor gostaria de Adicionar em um Array");

Push(valorPush);

function Push(Value) {
  array[array.length] = Value;
}

// Método Pop Próprio

console.log(array);

Pop(array);
function Pop(Array) {
  return (Array.length = Array.length - 1);
}

console.log(array);

//Método IndexOf Próprio

const valorIndexOf = Number(
  prompt("Qual valor voce quer procurar dentro do Array: ")
);

IndexOf(valorIndexOf);

function IndexOf(Value) {
  let has = false;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === Value) {
      has = true;
      return alert(`O Index do ${Value} e ${index}`);
    }
  }
  if (has === false) {
    return alert(`O Valor nao Existe dentro do Array`);
  }
}

// Método Include Próprio

const valorInclude = prompt("Qual valor voce quer sabe se tem dentro do array");

Include(valorInclude);

function Include(Value) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] === Value) {
      return alert(true);
    }
  }
  if (index == array.length) {
    return alert(false);
  }
}

// Método Sort Próprio

Sort();
function Sort() {
  let arrayAuxiliar;
  for (let A = 0; A < array.length; A++) {
    for (let B = 0; B < array.length; B++) {
      if (array[B] < array[B + 1]) {
        arrayAuxiliar = array[B];
        array[B] = array[B + 1];
        array[B + 1] = arrayAuxiliar;
      }
    }
  }
  return alert(`Ordenado:\n${array}`);
}
