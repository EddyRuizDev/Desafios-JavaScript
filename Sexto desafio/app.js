
let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1003, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1002, marca: 'Clone', ram: 128, ssd: 720}
];

console.log(computadores);

console.log();

computadores.sort((o1, o2) => {
    if (o1.marca < o2.marca) {
        return -1;
    } else if (o1.marca > o2.marca) {
        return 1;
    } else {
        return 0;
    }
});

console.log(computadores);