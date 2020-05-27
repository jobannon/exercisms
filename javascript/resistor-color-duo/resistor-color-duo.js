export const decodedValue = (incoming_data) => {

  var color_value_mapper =  {
    'black': 0, 
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9
  }
  var result;

  for (var i = 0; i < incoming_data.length; i++ ){
    if (i == 0){ // first spot
      result = color_value_mapper[incoming_data[i]] 
    } //tens spot 
    else if (i == 1){
      result = (result * 10) + color_value_mapper[incoming_data[i]] 
      console.log(result)
    }
  }
  return result;
};
