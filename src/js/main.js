class Bar {
    constructor(version) {
        this.version = version;
    }

    bartending() {
        const music = new Audio('../music/barman.mp3');
        music.loop = true;
        music.playbackRate = 2;
        music.play();
    }
}
