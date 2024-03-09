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
        var image = document.getElementById('background');
        image.onload = function() {
            var engine = new RainyDay({
                image: this
            });
            engine.rain([ [3, 2, 2] ], 100);
        };
        image.crossOrigin = 'anonymous';
        image.src = 'https://mc.minecraftbox.link/-----i.imgur.com/U1Tqqdw.jpg';
    }
}
