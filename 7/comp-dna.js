function DNAStrand(dna){
    return dna.split('').map(el => el === 'A' ? el.replace('A', 'T') :
                            el === 'T' ? el.replace('T','A') : 
                            el === 'G' ? el.replace('G','C') :
                            el === 'C' ? el.replace('C','G') : el).join('')
  }