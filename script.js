
const pack = {
    amount: 20,
    smoke() {
        this.amount--;
        return this.amount;
    }
}

const container = document.querySelector('body');
const smoking = document.createElement('button');
container.append(smoking);
smoking.addEventListener('click', rukyk);
smoking.innerText = pack.amount;

// function letsDavaiSmoke(object) {
//     while (object.amount > 0) {
//         object.smoke();
//         console.log(object.amount);
//     }
// }
// letsDavaiSmoke(pack);

function rukyk() {
    if (pack.amount > 0) {
        smoking.innerText = pack.smoke();
    }
}
rukyk();