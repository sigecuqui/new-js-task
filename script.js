const pack = {
    amount: 20,
    smoke() {
        this.amount--;
        console.log(this.amount);
    }
}

pack.smoke();

