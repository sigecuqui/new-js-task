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
smoking.innerText = pack.amount;
smoking.addEventListener('click', () => {
    if (pack.amount > 0) {
        smoking.innerText = pack.smoke();
    }
})

function letsDavaiSmoke(object) {
    console.log(object.amount);
    smoking.innerText = object.amount;
}

letsDavaiSmoke(pack);

const studentai = ['Bzegosz', 'Boleslov', 'Czeslov',];

studentai.forEach((value, index) => {
    const naujasPack = {...pack};
    studentai[index] = {
        vardas: value,
        pakelis: naujasPack
    };
})

console.log(studentai);