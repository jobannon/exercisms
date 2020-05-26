//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (incoming_data) => {
  let rna_mapper = {
      '': '',
     'G': 'C',
     'C': 'G',
     'T': 'A',
     'A': 'U',
  } 

  let result = ""
  for (var i = 0; i < incoming_data.length; i++){
    result = result + (rna_mapper[incoming_data[i]]); 
  }
  return result;
};


// Introduction
// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are 
// adenine (A), 
// cytosine (C), 
// guanine (G) and 
// thymine (T).

// The four nucleotides found in RNA are 
// adenine (A), 
// cytosine (C), 
// guanine (G) and 
// uracil (U).

// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U
