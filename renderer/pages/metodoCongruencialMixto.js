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
import CssBaseline from "@mui/material/CssBaseline";
import ChiCuadrada from "./chiCuadrada";
import Smirnov from "./smirnov";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function CongruencialMixto() {
  const [metodos, setMetodos] = React.useState([[]]);
  const [seed, setSeed] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(0);
  const [increment, setIncrement] = React.useState(0);
  const [module, setModule] = React.useState(0);
  const [numbersToValidate, setNumbersToValidate] = React.useState([]);
  const [alfa, setAlfa] = React.useState(0);

  function CongruencialMixto(seed, multiplier, increment, module, size) {
    let newSeed = seed;
    let values = [];
    let temp = [];
    let condition1 = false;
    let condition2 = false;
    let condition3 = false;
    if (gcd(increment, module) === 1) {
      condition1 = true;
    }

    let primeDividers = primeFactors(module);
    for (let i = 0; i < primeDividers.length; i++) {
      if ((multiplier - 1) % primeDividers[i] === 0) {
        condition2 = true;
        break;
      }
    }

    if (module % 4 === 0 && (multiplier - 1) % 4 === 0) {
      condition3 = true;
    }
    console.log(condition1, condition2, condition3);
    if (condition1 && condition2 && condition3) {
      for (let i = 0; i < size; i++) {
        temp.push(newSeed);
        newSeed = (multiplier * newSeed + increment) % module;
        temp.push(newSeed);
        temp.push(newSeed / module);
        values.push(temp);
        temp = [];
      }
      return values;
    } else {
      alert("No cumple la validación del Teorema de HULL-DOBELL.");
      return [];
    }
  }

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  function isPrime(n) {
    // Corner case
    if (n <= 1) return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++) if (n % i == 0) return false;

    return true;
  }

  function primeFactors(n) {
    let c = 2;
    let temp = [];
    while (n > 1) {
      if (n % c == 0) {
        console.log(c);
        console.log(n);
        temp.push(c);
        n /= c;
      } else c++;
    }
    return temp;
  }

  function updateValues() {
    let temp = [];
    for (let i = 0; i < size; i++) {
      temp.push(metodos[i][2]);
    }
    console.log(temp);
    return temp;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper
        sx={{
          margin: "auto",
          maxWidth: "auto",
          minHeight: "100vh",
          backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <ResponsiveAppBar />
        <Box sx={{ my: 4 }} pl={2} pr={2}>
          <Box sx={{ mb: 2, fontSize: "h4.fontSize", fontFamily: "Arial" }}>
            Método Congruencial Mixto
          </Box>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }} mb={2}>
            <TextField
              id="outlined-basic"
              label="Semilla"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setSeed(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Multiplicador"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setMultiplier(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Incremento"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setIncrement(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Módulo"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setModule(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Tamaño"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Alfa"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setAlfa(event.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                setMetodos(
                  CongruencialMixto(
                    parseInt(seed),
                    parseInt(multiplier),
                    parseInt(increment),
                    parseInt(module),
                    parseInt(size)
                  )
                );
              }}
            >
              Calcular
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setNumbersToValidate(updateValues);
              }}
            >
              Pruebas de bondad
            </Button>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Semilla</TableCell>
                  <TableCell>Numero Aleatorio</TableCell>
                  <TableCell>Ri</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {metodos.map((metodo) => (
                  <>
                    <TableRow
                      key={metodo[0]}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{metodo[0]}</TableCell>
                      <TableCell>{metodo[1]}</TableCell>
                      <TableCell>{metodo[2]}</TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
          <ChiCuadrada nums={numbersToValidate} alfa={alfa} />
          <br></br>
          <Smirnov nums={numbersToValidate} alfa={alfa} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
