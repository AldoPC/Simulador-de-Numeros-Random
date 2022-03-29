import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../components/navbar";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ComplexGrid() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "100%",
          flexGrow: 1,
          justifyContent: "center",
          backgroundColor: (darkTheme) =>
            darkTheme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <ResponsiveAppBar />
        <Grid
          container
          spacing={2}
          rowSpacing={5}
          columnSpacing={{ xs: 5, sm: 5, md: 5 }}
        >
          <Grid item xs={6} container textAlign="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Método de los Centros Cuadrados
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Argumentos a tomar:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Semilla, Tamaño
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <Link href="/metodosCuadrados">Calcular</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} container textAlign="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Método Congruencial Lineal
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Argumentos a tomar:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Semilla, Tamaño, Multiplicador, Incremento, Módulo
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <Link href="/metodoCongruencialLineal">Calcular</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} container textAlign="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Metodo Congruencial Mixto
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Argumentos a tomar:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Semilla, Tamaño, Multiplicador, Incremento, Módulo
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <Link href="/metodoCongruencialMixto">Calcular</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} container textAlign="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Método Congruencial Multiplicativo
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Argumentos a tomar:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Semilla, Tamaño, Multiplicador, Módulo
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <Link href="/generadorMultiplicativo">Calcular</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} container textAlign="center">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Método Congruencial Lineal Combinado
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Argumentos a tomar:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tamaño
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Calcular
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
