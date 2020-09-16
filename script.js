const pack = {
    amount: 20,
    smoke() {
        this.amount--;
    }
}

function letsDavaiSmoke(key) {
    while (key.amount > 0) {
        key.smoke();
        console.log(key.amount);
    }
}

letsDavaiSmoke(pack);