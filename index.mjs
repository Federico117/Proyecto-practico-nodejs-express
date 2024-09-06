/*console.log("Primer Ejecución");

setTimeout(() => {
  console.log("Segunda Ejecución");
  const resultExpensiveOp = 6 + 7;
  retardo(resultExpensiveOp);
}, 3000);

function retardo(valor) {
  setTimeout(() => {
    console.log(valor);
  }, 2000);
}

console.log("Tercera Ejecucion");
*/
/*const users = [
  { id: 1, nombre: "Federico", apellido: "Valdez" },
  { id: 2, nombre: "Carlos", apellido: "Vallejos" },
  { id: 3, nombre: "Mario", apellido: "Gonzalez" },
  { id: 4, nombre: "Fernando", apellido: "Rivadavia" },
];

async function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users.length > 0) {
        resolve(users);
      } else {
        reject("No hay nada en esta base de dardos");
      }
    }, 3000);
  });
}

async function hacerAlgo() {
  const data = await getUsers();
  console.log(data);
}
hacerAlgo();
console.log("Hola");*/

async function getUsers() {
  try {
    const users = await fetch("https://api.escuelajs.co/api/v1/users");
    const result = await users.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getUsers();

/*
setTimeout(() => {
  console.log(promesa);
}, 2900);

promesa
  .then((data) => console.log(data))
  .then((dat) => console.log(dat))
  .catch((rason) => console.log(rason));
*/
