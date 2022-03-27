import * as React from "react";
import Container from "@mui/material/Container";
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

function MetodosCuadrados(size, seed) {
  let newSeed = seed;
  let values = [];
  let temp = [];
  for (let i = 0; i < size; i++) {
    temp.push(newSeed);
    newSeed = Math.pow(newSeed, 2);
    temp.push(newSeed);
    if (newSeed.toString().length === 8) {
      newSeed = parseInt(newSeed.toString().substring(2, 6));
      temp.push(newSeed);
      temp.push(newSeed / 10000);
      values.push(temp);
      temp = [];
    } else {
      newSeed = parseInt(newSeed.toString().substring(1, 5));
      temp.push(newSeed);
      temp.push(newSeed / 10000);
      values.push(temp);
      temp = [];
    }
  }
  return values;
}

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

  if (module % (module / 2) === 0 && (multiplier - 1) % (module / 2) === 0) {
    condition2 = true;
  }

  if (module % 4 === 0 && (multiplier - 1) % 4 === 0) {
    condition3 = true;
  }
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
    return "Not possible";
  }
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

//CongruencialLineal(4, 5, 7, 8, 5)
//console.log((5 - 1) % 4)

export default function Index() {
  const [metodos, setMetodos] = React.useState([[]]);
  const [seed, setSeed] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const handleSeed = (event) => {
    setSeed(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ mb: 2, fontSize: "h4.fontSize", fontFamily: "Arial" }}>
          Método de los cuadrados medios
        </Box>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Seed"
            variant="outlined"
            onChange={handleSeed}
          />
          <TextField
            id="outlined-basic"
            label="Size"
            variant="outlined"
            onChange={handleSize}
          />
          <Button
            variant="contained"
            onClick={() => {
              setMetodos(MetodosCuadrados(size, seed));
            }}
          >
            Contained
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
              {metodos.map((metodo) => (
                <TableRow
                  key={metodo[0]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{metodo[0]}</TableCell>
                  <TableCell>{metodo[1]}</TableCell>
                  <TableCell>{metodo[2]}</TableCell>
                  <TableCell>{metodo[3]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
