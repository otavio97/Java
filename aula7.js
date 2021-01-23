console.log("if e else");

const ListaDestinos = new Array(
    "Salvador",
    "Uberlandia",
    "Recife"
);

console.log(ListaDestinos);
const idade = 13;

if (idade >= 18) {
    ListaDestinos.splice(1, 1);
    console.log("Destinos possiveis");
    console.log(ListaDestinos);
}
else {
    console.log("o ususario e menor de idade ");
    console.log("Destinos possiveis");
    console.log(ListaDestinos);
}
