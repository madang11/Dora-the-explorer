var script = [
    {speaker:"dora", text: "Dora: Hola! Soy Dora"},
    {speaker:"boots", text: "Boots: And I am Boots"},
    {speaker:"dora", text:"Today we will visit Bikini Bottom and steal the secret Krabby Patty recipe"},
    {speaker:"mappie", text:"Mappie: Click continue to begin"},
];

function show_message(message) {
    var speaker = message.speaker;
    var text = message.text;
    if (speaker === "dora") {
        $('.textboxes').css("left", "300px");
        $('.textboxes').css("top", "100px");
    }
    if (speaker === "boots") {
        $('.textboxes').css("left", "370px");
        $('.textboxes').css("top", "80px");
    }  
     $('.rectangle').text(text);
    if (speaker === "mappie" ) {
        $('.textboxes').css("left", "130px");
        $('.textboxes').css("top", "250px");
    }
}

if (1 === '1') {
}


var n = script.length;

for (var i = 0; i < n; i += 1) {
    show_message(script[i]);
}
var current = 0;
$('.button').click(function() {
    show_message(script[current]);
    current += 1;
});

function dora (color) {
    
}



