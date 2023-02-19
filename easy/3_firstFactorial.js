export const firstFactorial = (num) => {
  let factoriel = 1;

  for (let i = 2; i <= num; i++) {
    factoriel *= i;
  }
  return factoriel;
};
