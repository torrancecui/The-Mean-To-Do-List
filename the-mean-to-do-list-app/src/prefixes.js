const prefixes = [
    "Please f*cking ",
    "Honest to God, ",
    "For once in your life, ",
    "For God's sake, ",
    "Jesus Christ, just please "
];

function getRandInt(max) {
    return Math.floor(Math.random() * max);
}

export function pickRandPrefix(){
    let num = getRandInt(prefixes.length);
    return prefixes[num];
}