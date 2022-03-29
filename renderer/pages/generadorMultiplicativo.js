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

function CongruencialMultiplicativo(seed, multiplier, module, size) {
  let newSeed = seed;
  let values = [];
  let temp = [];
  let condition1 = false;
  let condition2 = false;
  if (seed >= 0 && multiplier >= 0 && module >= 0) {
    condition1 = true;
  }

  if (module > multiplier && module > seed) {
    condition2 = true;
  }

  if (condition1 && condition2) {
    for (let i = 0; i < size; i++) {
      temp.push(newSeed);
      newSeed = (multiplier * newSeed) % module;
      temp.push(newSeed);
      temp.push(newSeed / module);
      values.push(temp);
      temp = [];
    }
    return values;
  } else {
    alert("Valores no validos.");
    return [];
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function CongruenciaMixto() {
  const [metodos, setMetodos] = React.useState([[]]);
  const [seed, setSeed] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(0);
  const [module, setModule] = React.useState(0);
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
            Método Congruencial Multiplicativo
          </Box>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }} mb={2}>
            <TextField
              id="outlined-basic"
              label="Semilla"
              variant="outlined"
              onChange={(event) => {
                setSeed(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Multiplicador"
              variant="outlined"
              onChange={(event) => {
                setMultiplier(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Módulo"
              variant="outlined"
              onChange={(event) => {
                setModule(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Tamaño"
              variant="outlined"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                setMetodos(
                  CongruencialMultiplicativo(
                    parseInt(seed),
                    parseInt(multiplier),
                    parseInt(module),
                    parseInt(size)
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
                  <TableCell>Semilla</TableCell>
                  <TableCell>Numero Aleatorio</TableCell>
                  <TableCell>Ri</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {metodos.map((metodo) => (
                  <TableRow
                    key={metodo[0]}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{metodo[0]}</TableCell>
                    <TableCell>{metodo[1]}</TableCell>
                    <TableCell>{metodo[2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
