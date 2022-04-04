import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "../components/navbar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CongruencialCombinado = () => {
  const [sizeFunc, setSizeFunc] = React.useState();
  const [indexFunc, setIndexFunc] = React.useState([]);
  const [metodos, setMetodos] = React.useState([[]]);
  const [seed, setSeed] = React.useState([]);
  const [multiplier, setMultiplier] = React.useState([]);
  const [module, setModule] = React.useState([]);

  const metodoCongruencialCombinado = (sizeFunc, seed, multiplier, module) => {
    let periodNum = 1;
    for (let i = 0; i < sizeFunc; ++i) {
      periodNum *= module[i] - 1;
    }
    let periodDen = Math.pow(2, sizeFunc - 1);
    let period = parseInt(periodNum / periodDen);
    let values = [];

    // TODO: Arreglar usando valores previos
    for (let k = 0; k < period; ++k) {
      let valuesIt = [];
      for (let i = 0; i < sizeFunc; ++i) {
        let condition1 = false;
        let condition2 = false;
        if (seed[i] >= 0 && multiplier[i] >= 0 && module[i] >= 0) {
          condition1 = true;
        }
        if (module[i] > multiplier[i] && module[i] > seed[i]) {
          condition2 = true;
        }
        if (condition1 && condition2) {
          let newSeed = (multiplier[i] * seed[i]) % module[i];
          valuesIt.push(newSeed);
        }
      }
      let condSum = 1;
      let tempSum = 0;
      for (let i = 0; i < sizeFunc; ++i) {
        tempSum += condSum * valuesIt[i];
        condSum *= -1;
      }
      let congVal = tempSum % (module[0] - 1);
      valuesIt.push(congVal);
      values.push(valuesIt);
    }

    return values;
  };
  console.log("seed" + seed);
  console.log("multiplier" + multiplier);
  console.log("module" + module);
  console.log("sizeFunc" + sizeFunc);
  console.log("indexFunc" + indexFunc);
  console.log("metodos" + metodos);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "auto",
          backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <ResponsiveAppBar />
        <Box sx={{ my: 4 }}>
          <Box sx={{ mb: 2, fontSize: "h4.fontSize", fontFamily: "Arial" }}>
            Método Congruencial Lineal Combinado
          </Box>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }} mb={2}>
            <TextField
              id="outlined-basic"
              label="Generadores K"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setSizeFunc(
                  event.target.value !== "" && event.target.value !== undefined
                    ? parseInt(event.target.value)
                    : 0
                );
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                setIndexFunc([...Array(sizeFunc).keys()]);
                setSeed([...Array(sizeFunc).fill(0)]);
                setMultiplier([...Array(sizeFunc).fill(0)]);
                setModule([...Array(sizeFunc).fill(1)]);
              }}
            >
              Crear
            </Button>
          </Stack>
          {/* TODO: Actualizar div cuando se da click en 'Crear' */}
          <div id="rendered_inputs">
            {indexFunc.length > 0 &&
              indexFunc.map((index) => (
                <>
                  <Stack
                    spacing={2}
                    direction={{ xs: "column", sm: "row" }}
                    mb={2}
                  >
                    <TextField
                      id="outlined-basic"
                      label={`Semilla F${index}`}
                      type="number"
                      variant="outlined"
                      onChange={(event) => {
                        let tempSeed = seed;
                        tempSeed[index] = parseInt(event.target.value);
                        setSeed(tempSeed);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label={`Multiplicador F${index}`}
                      variant="outlined"
                      type="number"
                      onChange={(event) => {
                        let tempMultiplier = multiplier;
                        tempMultiplier[index] = parseInt(event.target.value);
                        setMultiplier(tempMultiplier);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label={`Módulo F${index}`}
                      variant="outlined"
                      type="number"
                      onChange={(event) => {
                        let tempModule = module;
                        tempModule[index] = parseInt(event.target.value);
                        setModule(tempModule);
                      }}
                    />
                  </Stack>
                </>
              ))}
          </div>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }} mb={2}>
            <Button
              variant="contained"
              onClick={() => {
                setMetodos(
                  metodoCongruencialCombinado(
                    sizeFunc,
                    seed,
                    multiplier,
                    module
                  )
                );
              }}
            >
              Calcular
            </Button>
          </Stack>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {indexFunc &&
                    indexFunc.map((index) => (
                      <>
                        <TableCell>{`F${index}`}</TableCell>
                      </>
                    ))}
                  <TableCell>Final Func</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {metodos &&
                  metodos.map((metodo) => (
                    <>
                      <TableRow
                        key={metodo[0]}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {metodo &&
                          metodo.map((value) => (
                            <>
                              <TableCell>{value}</TableCell>
                            </>
                          ))}
                      </TableRow>
                    </>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default CongruencialCombinado;
