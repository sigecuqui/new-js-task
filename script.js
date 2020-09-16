const pack = {
    amount: 20,
    smoke() {
        this.amount--;
    }
}

while (pack.amount > 0) {
    pack.smoke();
    console.log(pack.amount);
}


