
function coffee1 (sugar, milk) {
    var text = 'coffee';
    text += sugar === undefined || sugar === false ? '' : ' with sugar';
    text += milk === undefined || milk === false ? '' : !sugar ? ' with milk' : ' and with milk';
    return text;
}

function coffee2(sugar = false, milk = false) {
    return `coffee${sugar ? ' with sugar' : ''}${milk ? (sugar ? ' and' : '') + ' with milk' : ''}`;
}