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

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function MetodoCentroCuadrado() {
  const [metodos, setMetodos] = React.useState([[]]);
  const [seed, setSeed] = React.useState(0);
  const [size, setSize] = React.useState(0);

  function MetodosCuadrados(size, seed) {
    let seedStr = seed.toString();
    if (seedStr.toString().length < 4) {
      seedStr = seedStr.padStart(4, "0");
    }
    let values = [];

    for (let i = 0; i < size; i++) {
      let temp = [];
      // Base case
      if (seedStr === "0000") {
        temp.push(seedStr);
        temp.push(seedStr);
        temp.push(seedStr);
        temp.push(0);
        values.push(temp);
        break;
      }

      temp.push(seedStr);

      let genNum = Math.pow(parseInt(seedStr), 2).toString();
      if (genNum.toString().length < 8) {
        genNum = genNum.padStart(8, "0");
      }
      temp.push(genNum);

      let randNum = genNum.substring(2, 6);
      temp.push(randNum);

      let RiVal = parseInt(randNum) / 10000;
      temp.push(RiVal);

      seedStr = genNum.substring(2, 6);
      values.push(temp);
    }
    return values;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Paper
        sx={{
          margin: "auto",
          maxWidth: "100%",
          minHeight: "100vh",
          backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <ResponsiveAppBar />
        <Box sx={{ my: 4 }} pl={2} pr={2}>
          <Box sx={{ mb: 2, fontSize: "h4.fontSize", fontFamily: "Arial" }}>
            M??todo de los cuadrados medios
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
              label="Tama??o"
              variant="outlined"
              type="number"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />

            <Button
              variant="contained"
              onClick={() => {
                setMetodos(MetodosCuadrados(parseInt(size), parseInt(seed)));
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
                  <TableCell>Generador</TableCell>
                  <TableCell>Numero Aleatorio</TableCell>
                  <TableCell>Ri</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {metodos[0] !== "undefined" &&
                  metodos[0].length > 0 &&
                  metodos.map((metodo) => (
                    <>
                      <TableRow
                        key={metodo[0]}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{metodo[0]}</TableCell>
                        <TableCell>{metodo[1]}</TableCell>
                        <TableCell>{metodo[2]}</TableCell>
                        <TableCell>{metodo[3]}</TableCell>
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
}
