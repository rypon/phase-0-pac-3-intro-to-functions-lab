function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log("hello".toUpperCase());
}

function logWhisper(string) {
    console.log("HELLO".toLocaleLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello') {
        return "I can't hear you!";
    }
    if (string === 'HELLO') {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}