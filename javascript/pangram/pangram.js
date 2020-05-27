//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (incoming_text_data) => {
  var alphabet_counter = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0
  }
  var total_count = 0;
  var incoming_text_data_l = incoming_text_data.toLowerCase() 

  var i = incoming_text_data_l.length;
  while (i--){
    if ( alphabet_counter[incoming_text_data_l[i]] == 0){
      alphabet_counter[incoming_text_data_l[i]] += 1;
      total_count += 1
    }
  }

  if (total_count == 26){
    return true
  }else {
    return false
  }
};
