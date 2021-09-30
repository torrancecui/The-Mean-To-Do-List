const meanPrefixes = [
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

const nicePrefixes = [
    "would you kindly please ",
    "you're doing so good sweetie, go  ",
    "please remember to "
];

function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

export function pickRandPrefix(niceMode){
    if (niceMode){
        let num = getRandInt(nicePrefixes.length);
        return nicePrefixes[num];
    }else{
        let num = getRandInt(meanPrefixes.length);
        return meanPrefixes[num];
    }
}