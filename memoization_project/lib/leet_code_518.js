// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

/**
//  *
 */
var change = function (amount, coins, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;

    let coinsArray = [];

    coins.forEach((coin) => {
        if (coin <= amount) {
            coinsArray.push(change(amount - coin, coins, memo));
            
        }
    });

    memo[amount] = coinsArray;
    return coinsArray.length;

};

console.log(change(5, [1,2,5]))