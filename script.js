const pack = {
    amount: 20,
    smoke() {
        this.amount--;
    }
}

function letsDavaiSmoke(object) {
    while (object.amount > 0) {
        object.smoke();
        console.log(object.amount);
    }
}

letsDavaiSmoke(pack);