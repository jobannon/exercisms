export function twoFer(incoming_name = "you"){
    return `One for ${incoming_name}, one for me.`
}

// is there another way to export in javascript?
exports.twoFer = twoFer;
