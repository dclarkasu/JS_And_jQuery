// Write a program that, given a DNA strand, returns its RNA complement (per RNA transcription).
//
// Both DNA and RNA strands are a sequence of nucleotides.
//
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
//
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
//
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
//
// G -> C
// C -> G
// T -> A
// A -> U
// Setup
//
// Create a function named 'toRna(nucleo)' in the public/rna.js file.
//
// Open index.html in your browser to view test results, as well as console output for the file.

var toRna = function(nucleo) {
  var rna = "";
    for (var i = 0; i < nucleo.length; i++) {
      switch (nucleo[i]) {
        case 'G':
          rna += 'C';
          break;
        case 'C':
          rna += 'G';
          break;
        case 'T':
          rna += "A";
          break;
        case 'A':
          rna += "U";
          break;
        // default:
      }
    }
    return rna;
}
