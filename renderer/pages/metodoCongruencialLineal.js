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
import ChiCuadrada from "./chiCuadrada";
import Smirnov from "./smirnov";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function CongruenciaLineal() {
  const [metodos, setMetodos] = React.useState([[]]);
  const [numbersToValidate, setNumbersToValidate] = React.useState([]);
  const [alfa, setAlfa] = React.useState(0);
  const [seed, setSeed] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(0);
  const [increment, setIncrement] = React.useState(0);
  const [module, setModule] = React.useState(0);

  function CongruencialLineal(seed, multiplier, increment, module, size) {
    let newSeed = seed;
    let values = [];
    let temp = [];
    for (let i = 0; i < size; i++) {
      temp.push(newSeed);
      newSeed = (multiplier * newSeed + increment) % module;
      temp.push(newSeed);
      temp.push(newSeed / module);
      values.push(temp);
      temp = [];
    }
    return values;
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
            Método Congruencial Lineal
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
                  CongruencialLineal(
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
