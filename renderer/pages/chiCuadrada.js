const ChiCuadrada = ({ nums, alfa }) => {
  nums.sort();
  const N = nums.length;
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);
  const range = maxNum - minNum;
  const K = Math.floor(1 + 3.322 * Math.log10(N));

  const classRange = +(range / K).toFixed(1);

  // Uniform distribution
  const a = minNum;
  const b = maxNum;

  const classLeftLimits = Array.from(
    { length: K },
    (_, i) => minNum + i * classRange
  );

  const classRightLimits = Array.from(
    { length: K + 1 },
    (_, i) => minNum + i * classRange
  );
  classRightLimits.shift();

  let classNums = [];
  for (let i = 0; i < classLeftLimits.length; ++i) {
    const limLeft = classLeftLimits[i];
    const limRight = classRightLimits[i];

    // TODO: Check first class created, probably not > limLeft, instead >= limLeft
    classNums.push(nums.filter((n) => n > limLeft && n <= limRight));
  }

  // F0i Observados
  let foiObserved = [];
  for (let i = 0; i < classNums.length; ++i) {
    foiObserved.push(classNums[i].length);
  }

  // INTEGRAL (1 / b - a) dx
  let probability = [];
  for (let i = 0; i < classLeftLimits.length; ++i) {
    const limLeft = classLeftLimits[i];
    const limRight = classRightLimits[i];
    const integralProbability = (limRight - limLeft) / (b - a);
    probability.push(integralProbability);
  }

  // FEi Esperados
  let foiExpected = [];
  for (let i = 0; i < probability.length; ++i) {
    foiExpected.push(+(probability[i] * N).toFixed(2));
  }

  // (F0-FE)^2/FE
  let foFe = [];
  for (let i = 0; i < foiObserved.length; ++i) {
    const valFoFe =
      Math.pow(foiObserved[i] - foiExpected[i], 2) / foiExpected[i];
    foFe.push(valFoFe);
  }

  // SUMA (F0-FE)^2/FE
  const sumFoFe = foFe.reduce((a, b) => a + b, 0);

  console.log(
    "\nK",
    K,
    "\nclassRange",
    classRange,
    "\nclassLeftLimits",
    classLeftLimits,
    "\nclassRightLimits",
    classRightLimits,
    "\nclassNums",
    classNums,
    "\nfoiObserved",
    foiObserved,
    "\nprobability",
    probability,
    "\nfoiExpected",
    foiExpected,
    "\nfoFe",
    foFe,
    "\nsumFoFe",
    sumFoFe
  );
  return (
    <div>
      <h1>Chi Cuadrada</h1>
    </div>
  );
};

export default ChiCuadrada;
