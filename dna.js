// here go helper functions

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  /*factory function, that creates mutliple objects, also creates the array of mutated dna strand, 
  which has different base than created primaly DNA*/

  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        let newDnaBases = ['A', 'T', 'C', 'G'];
        let dnaindex = [Math.floor(Math.random() * 14)];
        newDnaBases = newDnaBases.filter(x => x !== dna[dnaindex]);
        this.dna[dnaindex] =newDnaBases[Math.floor(Math.random() * 3)]
        return this.dna;
      },
      compareDNA(pAequor) {
        let ammountOfCommon = 0;
        for (let i = 0; i<this.dna.length; i++){
             if (this.dna[i] === pAequor[i]){
               ammountOfCommon++;
              }
            }
            return "specimen #1 and specimen #2 have " + (ammountOfCommon / 15*100).toFixed(2) +  "% DNA in common"
        },
        willLikelySurvive() {
          let TotalCandG = 0;
          for (let i = 0; i<this.dna.length; i++){
            if (this.dna[i] === 'C' || this.dna[i] === 'G'){
              TotalCandG++;
            }
          }
          if (TotalCandG / 15 >= 0.6){
          return true
          } else {
            return false;
          }
        
        },
        complementStrand(){
          let complementaryDnaStrand = dna;
          for (let i = 0; i<complementaryDnaStrand.length; i++){
            if (complementaryDnaStrand[i] === 'A'){
              complementaryDnaStrand[i] = 'T';
            } else if (complementaryDnaStrand[i] === 'T'){
              complementaryDnaStrand[i] = 'A';
            } else if (complementaryDnaStrand[i] === 'C'){
              complementaryDnaStrand[i] = 'G';
            } else if (complementaryDnaStrand[i] === 'G'){
              complementaryDnaStrand[i] = 'C';
            }
          }
          return complementaryDnaStrand
        }
      }
    }

//test of the factory function
// console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive())
//here goes the code to creat 30 units with different DNA with probability >60 % to survive

  const morePaequr = (num) => {
    let listOfExamples =[];
    let i = 0;
    do {
      let pAequorObj = pAequorFactory(i, mockUpStrand());
      if (pAequorObj.willLikelySurvive() === true){
      listOfExamples.push(pAequorObj);
      i = i + 1
        } 
      } while (i<num);

    return listOfExamples;

  }


console.log(morePaequr(30))
