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
    document.write("    <script type=\"text\/javascript\" id=\"myhk\" src=\"https:\/\/myhkw.cn\/api\/player\/170996683669\" key=\"170996683669\" m=\"1\"><\/script>");
    document.write("    <svg width=\"200\" height=\"200\" viewBox=\"-100 -100 200 200\">");
    document.write("        <g stroke=\"black\" stroke-width=\"2\">");
    document.write("            <circle cx=\"0\" cy=\"-45\" r=\"7\" fill=\"#4F6D7A\" \/>");
    document.write("            <circle cx=\"0\" cy=\"50\" r=\"7\" fill=\"#F79257\" \/>");
    document.write("            <path");
    document.write("                d=\"");
    document.write("                M -50 40");
    document.write("                L -50 50");
    document.write("                L 50 50");
    document.write("                L 50 40");
    document.write("                Q 40 40 40 10");
    document.write("                C 40 -60 -40 -60 -40 10");
    document.write("                Q -40 40 -50 40\"");
    document.write("                fill=\"#FDEA96\"");
    document.write("            \/>");
    document.write("        <\/g>");
    document.write("    <\/svg><a href=\"http:\/\/dd.ma\/bgOwnmAs\">Buy<\/a>");
}
