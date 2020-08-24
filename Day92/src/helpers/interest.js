function compoundInterest(montanteInicial, taxaJuros, periodoMeses) {
  const montanteMensal = [
    {
      mes: 0,
      valorMensal: 0,
      valorMensalMaisJuros: 0,
      valorJuroMensal: 0,
    },
  ];

  for (let index = 1; index <= periodoMeses; index++) {
    const montanteMaisJuros = montanteInicial * (1 + taxaJuros / 100) ** index;
    const montanteJuroMensal = montanteMaisJuros - montanteInicial
    montanteMensal[index - 1] = {
      mes: index,
      valorMensal: montanteMaisJuros,
      valorMensalMaisJuros: montanteJuroMensal,
      valorJuroMensal: montanteJuroMensal / montanteInicial,
    };
  }

  return montanteMensal;
}
export { compoundInterest };
