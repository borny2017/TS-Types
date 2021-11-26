type Named = {
    name: string;
}

type Priced = {
    price: number;
}

function logPrice(obj: Named & Priced) {
    console.log(obj.name + ':' + obj.price);)
}

logPrice({
    name: 'Pepperoni Pizza',
    price: 9.9
});
