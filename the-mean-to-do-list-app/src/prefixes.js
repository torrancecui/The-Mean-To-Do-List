const prefixes = [
    "please f*cking ",
    "honest to god, ",
    "for once in your life, ",
    "for god's sake, ",
    "jesus christ, just please ",
    "you have no friends, so please ",
    "your mom doesn't even love you, so just ",
    "boo f*cking hoo, go ",
    "get off your ass and "
];

function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

export function pickRandPrefix(){
    let num = getRandInt(prefixes.length);
    return prefixes[num];
}