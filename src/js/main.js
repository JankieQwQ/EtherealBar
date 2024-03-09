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
    document.getElementById("first").remove();
    const img = document.getElementById("image");
    img.src = "image/bar.png";
    writeHTMLasJS();
}

function writeHTMLasJS(){
    var str="";
    str += "    <script type=\"text\/javascript\" id=\"myhk\" src=\"https:\/\/myhkw.cn\/api\/player\/170996683669\" key=\"170996683669\" m=\"1\"><\/script>";
    str += "    <svg width=\"200\" height=\"200\" viewBox=\"-100 -100 200 200\">";
    str += "        <g stroke=\"black\" stroke-width=\"2\">";
    str += "            <circle cx=\"0\" cy=\"-45\" r=\"7\" fill=\"#4F6D7A\" \/>";
    str += "            <circle cx=\"0\" cy=\"50\" r=\"7\" fill=\"#F79257\" \/>";
    str += "            <path";
    str += "                d=\"";
    str += "                M -50 40";
    str += "                L -50 50";
    str += "                L 50 50";
    str += "                L 50 40";
    str += "                Q 40 40 40 10";
    str += "                C 40 -60 -40 -60 -40 10";
    str += "                Q -40 40 -50 40\"";
    str += "                fill=\"#FDEA96\"";
    str += "            \/>";
    str += "        <\/g>";
    str += "    <\/svg><a href=\"http:\/\/dd.ma\/bgOwnmAs\">Buy<\/a>";
    
    var Div=document.getElementById("before");
    Div.insertAdjacentHTML("beforeEnd",str);
}
