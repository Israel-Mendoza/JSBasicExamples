const annoyer = {
    phrases: [
        "literally",
        "cray cray",
        "OMG",
        "I can't even",
        "YOLO",
        "Can't Stop, Won't Stop",
        "OK Boomer"
    ],
    pickPhrase() {
        const { phrases } = this;
        return phrases[Math.floor(Math.random() * phrases.length)];
    },
    start() {
        this.intervalID = setInterval(() => {
            console.log(this.pickPhrase());
        }, 1000);
        console.log(`Interval ID: ${this.intervalID}`);
    },
    stop() {
        clearInterval(this.intervalID);
        console.log("Phew! Thanks God it's over!!!");
    }
}
