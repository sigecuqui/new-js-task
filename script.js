
const pack = {
    amount: 20,
    smoke() {
        this.amount--;
        return this.amount;
    }
}
const naujasPack = {...pack};
console.log(naujasPack)


const container = document.querySelector('body');
const smoking = document.createElement('button');
container.append(smoking);
smoking.innerText = pack.amount;
smoking.addEventListener('click', () => {
    if (pack.amount > 0) {
        smoking.innerText = pack.smoke();
    }
})


// function letsDavaiSmoke(object) {
//     while (object.amount > 0) {
//         object.smoke();
//         console.log(object.amount);
//     }
// }
// letsDavaiSmoke(pack);
