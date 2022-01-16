let pp = 0;
let ppPerSecond = 0;

let upgrades = [];

const pps = [1, 5, 20, 500, 10000, 500000, 100000000];


let costs = [20, 100, 500, 10000, 1000000, 30000000, 800000000]

let isSpinning = false;

const btnAuto = document.getElementById('auto');
const btnHD = document.getElementById('hd');
const btnHR = document.getElementById('hr');
const btnDT = document.getElementById('dt');
const btnNC = document.getElementById('nc');
const btnSO = document.getElementById('so');
const btnSD = document.getElementById('sd');

const buttons = [btnAuto, btnHD, btnHR, btnDT, btnNC, btnSO, btnSD];

let costLabels = [];

costLabels.push(document.getElementById('cost1'));
costLabels.push(document.getElementById('cost2'));
costLabels.push(document.getElementById('cost3'));
costLabels.push(document.getElementById('cost4'));
costLabels.push(document.getElementById('cost5'));
costLabels.push(document.getElementById('cost6'));
costLabels.push(document.getElementById('cost7'));


setInterval(function() {
    pp += ppPerSecond / 1000;
    document.getElementById('counter').innerHTML = `PP: ${pp.toLocaleString('en', {useGrouping:true})}`;
    document.title = `${pp.toLocaleString('en', {useGrouping:true})} pp`
    for (let a = 0; a < costs.length; a++) {
        costs[a] = Math.round(costs[a]);

    }

    for (let x = 0; x < 7; x++) {
        costLabels[x].innerHTML = `COST: ${costs[x].toLocaleString('en', {useGrouping:true})}`
    }

    document.getElementById('ppsec').innerHTML = `PP Per Second: ${ppPerSecond.toLocaleString('en', {useGrouping:true})}`;
}, 1)


setInterval(function() {
    for (let i = 0; i < 7; i++) {
        if (pp < costs[i]) {
            buttons[i].style.opacity = '50%';
        } else {
            buttons[i].style.opacity = '100%';
        }
    }
}, 100);

function buy(btn) {
    if (pp < costs[btn]) {

    } else {
        pp -= costs[btn];
        ppPerSecond += pps[btn];
        costs[btn] *= 1.2;
    }
}



function ppCheck() {

}


function reduce() {
    pp -= 10;
    document.getElementById('counter').innerHTML = `PP: ${pp.toLocaleString('en', {useGrouping:true})}`;
}


function click_btn(url) {
    pp += 1;
    new Audio(url).play();
}