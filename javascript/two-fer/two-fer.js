function twoFer(incoming_name){
  console.log(incoming_name);
  if (!(incoming_name)) {
    return "One for you, one for me."
  } else {
    return `One for ${incoming_name}, one for me.`
  }
}

exports.twoFer = twoFer;
