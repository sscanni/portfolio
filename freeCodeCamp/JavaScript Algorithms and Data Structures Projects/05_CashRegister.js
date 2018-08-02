"use strict";
function checkCashRegister(price, cash, cid) {

    let wrkcid = [];
    let retcid = [];
    let d = 0;
    let totalDrawer = 0;
    let changeDue = cash - price;
    let ret = {status: "", change: []};

    for (let i = 0; i < cid.length; i++) {
        wrkcid.push([]);
        wrkcid[i].push(cid[i][0]);
        wrkcid[i].push(cid[i][1]);
        wrkcid[i][1] = 0;

        switch (cid[i][0]) {
        case 'PENNY':
            d = .01;
            break;
        case 'NICKEL':
            d = .05;
            break;
        case 'DIME':
            d = .10;
            break;
        case 'QUARTER':
            d = .25;
            break;
        case 'ONE':
            d = 1.00;
            break;
        case 'FIVE':
            d = 5.00;
            break;
        case 'TEN':
            d = 10.00;
            break;
        case 'TWENTY':
            d = 20.00;
            break;
        case 'ONE HUNDRED':
            d = 100.00;
            break;
      }
      cid[i].push(d);               //Denomination
      totalDrawer += cid[i][1];     
    }

    totalDrawer = totalDrawer.toFixed(2);

    console.log("Price=" + price.toFixed(2) + "|Cash=" + cash.toFixed(2) + "|Change Due=" + changeDue.toFixed(2) + "|Total cash in draw=" + totalDrawer);
    
    if (totalDrawer < changeDue) {
        ret.status =  'INSUFFICIENT_FUNDS';
        return ret;
    }
    if (totalDrawer == changeDue) {
        ret.status =  'CLOSED';
        ret.change = cid;
        return ret; 
    }
    for (let i = cid.length-1; i > -1; i--) {
        if (changeDue >= cid[i][2] && cid[i][1] > 0) {
            changeDue -= cid[i][2];
            cid[i][1] -= cid[i][2];
            wrkcid[i][1] += cid[i][2]; 
            i = cid.length;
            if (changeDue == 0) {
            break;
            }
        }
    }
    let x = 0;
    for (let i = 0; i < wrkcid.length; i++) {
         if (wrkcid[i][1] > 0) {
            retcid.push([]);
            retcid[x].push(wrkcid[i][0]);
            retcid[x].push(wrkcid[i][1]);
            x++;
        }
    }
    ret.status =  'OPEN';
    ret.change = retcid.reverse();
    return ret;
  }
  
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  //console.log(checkCashRegister(100, 435.41, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  //console.log(checkCashRegister(1000, 20000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
/*
Original Code:

function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

JavaScript Algorithms and Data Structures Projects: Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

*/