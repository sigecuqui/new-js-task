
const container = document.querySelector('body');

const studentai = ['Bzegosz', 'Boleslov', 'Czeslov',];

studentai.forEach((value, index) => {
    const pack = {
        amount: 20,
        smoke() {
            this.amount--;
            return this.amount;
        }
    }
    const smoking = document.createElement('button');
    container.append(smoking);
    smoking.innerText = `${value}: ${pack.amount}`;
    smoking.addEventListener('click', () => {
        if (pack.amount > 0) {
            smoking.innerText = `${value}: ${pack.smoke()}`;
        }
    })

    function letsDavaiSmoke(object) {
        console.log(object.amount);
        smoking.innerText = `${value}: ${object.amount}`;
    }
    letsDavaiSmoke(pack);
    studentai[index] = {
        vardas: value,
        pakelis: {...pack}
    };
})

console.log(studentai);