class Bar {
    constructor(version) {
        this.version = version;
    }

    bartending() {
        const bar = new Audio('music/barman.mp3');
        bar.loop = true;
        bar.playbackRate = 2;
        bar.play();
    }

    raining() {
        const that = this;

        const rain = new Audio('music/rain.mp3');
        rain.loop = true;
        rain.playbackRate = 2;
        rain.play();

    }
}

function load(){
    ethereal = new Bar('1.0.0');
    ethereal.raining();
    ethereal.bartending();
    document.getElementById("first").remove();
    const img = document.getElementById("image");
    img.src = "image/bar.png";
    writeHTMLasJS();
}

function writeHTMLasJS(){
    var str="";
    str += "    <\/svg><a class=\"button\" href=\"http:\/\/dd.ma\/bgOwnmAs\">Buy Wine<\/a>";
    var Div=document.getElementById("before");
    Div.insertAdjacentHTML("beforeEnd",str);
}
