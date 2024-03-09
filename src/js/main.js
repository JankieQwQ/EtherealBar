class Bar {
    constructor(version) {
        this.version = version;
    }

    bartending() {
        const bar = new Audio('../music/barman.mp3');
        bar.loop = true;
        bar.playbackRate = 2;
        bar.play();
    }

    raining() {
        const rain = new Audio('../music/rain.mp3');
        rain.loop = true;
        rain.playbackRate = 2;
        rain.play();
    }
}
