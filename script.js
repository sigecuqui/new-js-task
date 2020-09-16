const container = document.querySelector('.container');
const smoking = document.createElement('button');
container.append(smoking);
smoking.addEventListener('click', rukyk);

const pack = {
    amount: 20,
    smoke() {
        this.amount--;
    }
}

// function letsDavaiSmoke(object) {
//     while (object.amount > 0) {
//         object.smoke();
//         console.log(object.amount);
//     }
// }
// letsDavaiSmoke(pack);

function rukyk() {
    if (pack.amount > 0) {
        pack.smoke();
        smoking.innerText = pack.amount;
    }
}
rukyk();