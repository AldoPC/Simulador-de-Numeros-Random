import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const ChiCuadrada = ({ nums, alfa }) => {
  const chi_square = [
    [
      0, 0.995, 0.99, 0.975, 0.95, 0.9, 0.5, 0.2, 0.1, 0.05, 0.025, 0.02, 0.01,
      0.005, 0.002, 0.001,
    ],
    [
      1, 0.0000397, 0.000157, 0.000982, 0.00393, 0.0158, 0.455, 1.642, 2.706,
      3.841, 5.024, 5.412, 6.635, 7.879, 9.55, 10.828,
    ],
    [
      2, 0.01, 0.02, 0.051, 0.103, 0.211, 1.386, 3.219, 4.605, 5.991, 7.378,
      7.824, 9.21, 10.597, 12.429, 13.816,
    ],
    [
      3, 0.072, 0.115, 0.216, 0.352, 0.584, 2.366, 4.642, 6.251, 7.815, 9.348,
      9.837, 11.345, 12.838, 14.796, 16.266,
    ],
    [
      4, 0.207, 0.297, 0.484, 0.711, 1.064, 3.357, 5.989, 7.779, 9.488, 11.143,
      11.668, 13.277, 14.86, 16.924, 18.467,
    ],
    [
      5, 0.412, 0.554, 0.831, 1.145, 1.61, 4.351, 7.289, 9.236, 11.07, 12.833,
      13.388, 15.086, 16.75, 18.907, 20.515,
    ],
    [
      6, 0.676, 0.872, 1.237, 1.635, 2.204, 5.348, 8.558, 10.645, 12.592,
      14.449, 15.033, 16.812, 18.548, 20.791, 22.458,
    ],
    [
      7, 0.989, 1.239, 1.69, 2.167, 2.833, 6.346, 9.803, 12.017, 14.067, 16.013,
      16.622, 18.475, 20.278, 22.601, 24.322,
    ],
    [
      8, 1.344, 1.646, 2.18, 2.733, 3.49, 7.344, 11.03, 13.362, 15.507, 17.535,
      18.168, 20.09, 21.955, 24.352, 26.124,
    ],
    [
      9, 1.735, 2.088, 2.7, 3.325, 4.168, 8.343, 12.242, 14.684, 16.919, 19.023,
      19.679, 21.666, 23.589, 26.056, 27.877,
    ],
    [
      10, 2.156, 2.558, 3.247, 3.94, 4.865, 9.342, 13.442, 15.987, 18.307,
      20.483, 21.161, 23.209, 25.188, 27.722, 29.588,
    ],
    [
      11, 2.603, 3.053, 3.816, 4.575, 5.578, 10.341, 14.631, 17.275, 19.675,
      21.92, 22.618, 24.725, 26.757, 29.354, 31.264,
    ],
    [
      12, 3.074, 3.571, 4.404, 5.226, 6.304, 11.34, 15.812, 18.549, 21.026,
      23.337, 24.054, 26.217, 28.3, 30.957, 32.909,
    ],
    [
      13, 3.565, 4.107, 5.009, 5.892, 7.042, 12.34, 16.985, 19.812, 22.362,
      24.736, 25.472, 27.688, 29.819, 32.535, 34.528,
    ],
    [
      14, 4.075, 4.66, 5.629, 6.571, 7.79, 13.339, 18.151, 21.064, 23.685,
      26.119, 26.873, 29.141, 31.319, 34.091, 36.123,
    ],
    [
      15, 4.601, 5.229, 6.262, 7.261, 8.547, 14.339, 19.311, 22.307, 24.996,
      27.488, 28.259, 30.578, 32.801, 35.628, 37.697,
    ],
    [
      16, 5.142, 5.812, 6.908, 7.962, 9.312, 15.338, 20.465, 23.542, 26.296,
      28.845, 29.633, 32.0, 34.267, 37.146, 39.252,
    ],
    [
      17, 5.697, 6.408, 7.564, 8.672, 10.085, 16.338, 21.615, 24.769, 27.587,
      30.191, 30.995, 33.409, 35.718, 38.648, 40.79,
    ],
    [
      18, 6.265, 7.015, 8.231, 9.39, 10.865, 17.338, 22.76, 25.989, 28.869,
      31.526, 32.346, 34.805, 37.156, 40.136, 42.312,
    ],
    [
      19, 6.844, 7.633, 8.907, 10.117, 11.651, 18.338, 23.9, 27.204, 30.144,
      32.852, 33.687, 36.191, 38.582, 41.61, 43.82,
    ],
    [
      20, 7.434, 8.26, 9.591, 10.851, 12.443, 19.337, 25.038, 28.412, 31.41,
      34.17, 35.02, 37.566, 39.997, 43.072, 45.315,
    ],
    [
      21, 8.034, 8.897, 10.283, 11.591, 13.24, 20.337, 26.171, 29.615, 32.671,
      35.479, 36.343, 38.932, 41.401, 44.522, 46.797,
    ],
    [
      22, 8.643, 9.542, 10.982, 12.338, 14.041, 21.337, 27.301, 30.813, 33.924,
      36.781, 37.659, 40.289, 42.796, 45.962, 48.268,
    ],
    [
      23, 9.26, 10.196, 11.689, 13.091, 14.848, 22.337, 28.429, 32.007, 35.172,
      38.076, 38.968, 41.638, 44.181, 47.391, 49.728,
    ],
    [
      24, 9.886, 10.856, 12.401, 13.848, 15.659, 23.337, 29.553, 33.196, 36.415,
      39.364, 40.27, 42.98, 45.559, 48.812, 51.179,
    ],
    [
      25, 10.52, 11.524, 13.12, 14.611, 16.473, 24.337, 30.675, 34.382, 37.652,
      40.646, 41.566, 44.314, 46.928, 50.223, 52.62,
    ],
    [
      26, 11.16, 12.198, 13.844, 15.379, 17.292, 25.336, 31.795, 35.563, 38.885,
      41.923, 42.856, 45.642, 48.29, 51.627, 54.052,
    ],
    [
      27, 11.808, 12.879, 14.573, 16.151, 18.114, 26.336, 32.912, 36.741,
      40.113, 43.195, 44.14, 46.963, 49.645, 53.023, 55.476,
    ],
    [
      28, 12.461, 13.565, 15.308, 16.928, 18.939, 27.336, 34.027, 37.916,
      41.337, 44.461, 45.419, 48.278, 50.993, 54.411, 56.892,
    ],
    [
      29, 13.121, 14.256, 16.047, 17.708, 19.768, 28.336, 35.139, 39.087,
      42.557, 45.722, 46.693, 49.588, 52.336, 55.792, 58.301,
    ],
    [
      30, 13.787, 14.953, 16.791, 18.493, 20.599, 29.336, 36.25, 40.256, 43.773,
      46.979, 47.962, 50.892, 53.672, 57.167, 59.703,
    ],
    [
      31, 14.458, 15.655, 17.539, 19.281, 21.434, 30.336, 37.359, 41.422,
      44.985, 48.232, 49.226, 52.191, 55.003, 58.536, 61.098,
    ],
    [
      32, 15.134, 16.362, 18.291, 20.072, 22.271, 31.336, 38.466, 42.585,
      46.194, 49.48, 50.487, 53.486, 56.328, 59.899, 62.487,
    ],
    [
      33, 15.815, 17.074, 19.047, 20.867, 23.11, 32.336, 39.572, 43.745, 47.4,
      50.725, 51.743, 54.776, 57.648, 61.256, 63.87,
    ],
    [
      34, 16.501, 17.789, 19.806, 21.664, 23.952, 33.336, 40.676, 44.903,
      48.602, 51.966, 52.995, 56.061, 58.964, 62.608, 65.247,
    ],
    [
      35, 17.192, 18.509, 20.569, 22.465, 24.797, 34.336, 41.778, 46.059,
      49.802, 53.203, 54.244, 57.342, 60.275, 63.955, 66.619,
    ],
    [
      36, 17.887, 19.233, 21.336, 23.269, 25.643, 35.336, 42.879, 47.212,
      50.998, 54.437, 55.489, 58.619, 61.581, 65.296, 67.985,
    ],
    [
      37, 18.586, 19.96, 22.106, 24.075, 26.492, 36.336, 43.978, 48.363, 52.192,
      55.668, 56.73, 59.892, 62.883, 66.633, 69.346,
    ],
    [
      38, 19.289, 20.691, 22.878, 24.884, 27.343, 37.335, 45.076, 49.513,
      53.384, 56.896, 57.969, 61.162, 64.181, 67.966, 70.703,
    ],
    [
      39, 19.996, 21.426, 23.654, 25.695, 28.196, 38.335, 46.173, 50.66, 54.572,
      58.12, 59.204, 62.428, 65.476, 69.294, 72.055,
    ],
    [
      40, 20.707, 22.164, 24.433, 26.509, 29.051, 39.335, 47.269, 51.805,
      55.758, 59.342, 60.436, 63.691, 66.766, 70.618, 73.402,
    ],
    [
      41, 21.421, 22.906, 25.215, 27.326, 29.907, 40.335, 48.363, 52.949,
      56.942, 60.561, 61.665, 64.95, 68.053, 71.938, 74.745,
    ],
    [
      42, 22.138, 23.65, 25.999, 28.144, 30.765, 41.335, 49.456, 54.09, 58.124,
      61.777, 62.892, 66.206, 69.336, 73.254, 76.084,
    ],
    [
      43, 22.859, 24.398, 26.785, 28.965, 31.625, 42.335, 50.548, 55.23, 59.304,
      62.99, 64.116, 67.459, 70.616, 74.566, 77.419,
    ],
    [
      44, 23.584, 25.148, 27.575, 29.787, 32.487, 43.335, 51.639, 56.369,
      60.481, 64.201, 65.337, 68.71, 71.893, 75.874, 78.75,
    ],
    [
      45, 24.311, 25.901, 28.366, 30.612, 33.35, 44.335, 52.729, 57.505, 61.656,
      65.41, 66.555, 69.957, 73.166, 77.179, 80.077,
    ],
    [
      46, 25.041, 26.657, 29.16, 31.439, 34.215, 45.335, 53.818, 58.641, 62.83,
      66.617, 67.771, 71.201, 74.437, 78.481, 81.4,
    ],
    [
      47, 25.775, 27.416, 29.956, 32.268, 35.081, 46.335, 54.906, 59.774,
      64.001, 67.821, 68.985, 72.443, 75.704, 79.78, 82.72,
    ],
    [
      48, 26.511, 28.177, 30.755, 33.098, 35.949, 47.335, 55.993, 60.907,
      65.171, 69.023, 70.197, 73.683, 76.969, 81.075, 84.037,
    ],
    [
      49, 27.249, 28.941, 31.555, 33.93, 36.818, 48.335, 57.079, 62.038, 66.339,
      70.222, 71.406, 74.919, 78.231, 82.367, 85.351,
    ],
    [
      50, 27.991, 29.707, 32.357, 34.764, 37.689, 49.335, 58.164, 63.167,
      67.505, 71.42, 72.613, 76.154, 79.49, 83.657, 86.661,
    ],
  ];
  if (!nums) {
    nums = [0];
  }
  nums.sort();
  const N = nums.length;
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);
  const range = maxNum - minNum;
  const K = Math.floor(1 + 3.322 * Math.log10(N));

  const classRange = range / K;

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
  console.log("HERE");
  let updatedFoiObserved = [];
  let updatedClassLeftLimit = [];
  let updatedClassRightLimit = [];
  for (let i = 0; i < foiObserved.length; ++i) {
    let countNums = foiObserved[i];

    let itLeft = i;
    let itRight = i;

    while (itRight < foiObserved.length - 1 && countNums < 5) {
      ++itRight;
      countNums += foiObserved[itRight];
    }

    updatedFoiObserved.push(countNums);
    updatedClassLeftLimit.push(classLeftLimits[itLeft]);
    updatedClassRightLimit.push(classRightLimits[itRight]);

    i = itRight;
  }

  // INTEGRAL (1 / b - a) dx
  let probability = [];
  for (let i = 0; i < updatedClassLeftLimit.length; ++i) {
    const limLeft = updatedClassLeftLimit[i];
    const limRight = updatedClassRightLimit[i];
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
  for (let i = 0; i < updatedFoiObserved.length; ++i) {
    const valFoFe =
      Math.pow(updatedFoiObserved[i] - foiExpected[i], 2) / foiExpected[i];
    foFe.push(valFoFe);
  }

  // SUMA (F0-FE)^2/FE
  const sumFoFe = foFe.reduce((a, b) => a + b, 0);

  let index, check;
  for (let i = 0; i < chi_square[0].length; i++) {
    if (chi_square[0][i] == alfa) {
      index = i;
      break;
    }
  }

  if (nums.length === 0) {
    check = "";
  } else {
    if (chi_square[updatedFoiObserved - 1][index] > sumFoFe) {
      check = "Se acepta";
    } else if (chi_square[updatedFoiObserved - 1][index] < sumFoFe) {
      check = "Se rechaza";
    }
  }

  console.log(
    "\nK",
    K,
    "\na",
    a,
    "\nb",
    b,
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
    "\nupdatedFoiObserved",
    updatedFoiObserved,
    "\nupdatedClassLeftLimit",
    updatedClassLeftLimit,
    "\nupdatedClassRightLimit",
    updatedClassRightLimit,
    "\nprobability",
    probability,
    "\nfoiExpected",
    foiExpected,
    "\nfoFe",
    foFe,
    "\nsumFoFe",
    sumFoFe,
    "\nAceptacion:",
    check
  );

  let table = [];
  for (let i = 0; i < updatedFoiObserved.length; i++) {
    let temp = [];
    temp.push(`(${updatedClassLeftLimit[i]} - ${updatedClassRightLimit[i]}]`);
    temp.push(probability[i]);
    temp.push(updatedFoiObserved[i]);
    temp.push(foiExpected[i]);
    temp.push(foFe[i]);
    table.push(temp);
  }
  return (
    <div>
      <Box sx={{ mb: 2, fontSize: "h4.fontSize", fontFamily: "Arial" }}>
        Chi Cuadrada
      </Box>
      <Stack spacing={2} direction={{ xs: "column", sm: "row" }} mb={2}>
        <Box sx={{ mb: 2, fontSize: "h5.fontSize", fontFamily: "Arial" }}>
          Resultado de validación: {check}
        </Box>
        <Box sx={{ mb: 2, fontSize: "h5.fontSize", fontFamily: "Arial" }}>
          Valor de X0^2: {sumFoFe} | Valor de tabla Chi - Cuadrada:{" "}
          {chi_square[updatedFoiObserved - 1][index]}
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">K</TableCell>
              <TableCell align="center">F0i observado</TableCell>
              <TableCell align="center">Probabilidad</TableCell>
              <TableCell align="center">FEi esperado</TableCell>
              <TableCell align="center">(F0 - FE)^2/FE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((item) => (
              <>
                <TableRow
                  key={item[0]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{item[0]}</TableCell>
                  <TableCell align="center">{item[2]}</TableCell>
                  <TableCell align="center">{item[1]}</TableCell>
                  <TableCell align="center">{item[3]}</TableCell>
                  <TableCell align="center">{item[4]}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ChiCuadrada;
