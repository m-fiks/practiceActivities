const arrayOne = [1,2,3,4,5];

shuffleArray = arr => {
   return arr.sort(() => Math.random() - 0.5)
};

shuffleArray(arrayOne);