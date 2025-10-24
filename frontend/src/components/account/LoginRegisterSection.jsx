import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Paper,
} from "@mui/material";

export function LoginRegisterSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ display: "flex", flexDirection: "column" }}
      >


        {/* ----------- Criar Conta ----------- */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: "#fff",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#e57373",
                mb: 3,
                textAlign: "center",
              }}
            >
              Criar conta
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                margin="normal"
                InputProps={{ sx: { borderRadius: 2 } }}
              />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    placeholder="(99) 9999-9999"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="E-mail"
                    placeholder="email@teste.com"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Documento (CPF)"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Senha"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ sx: { borderRadius: 2 } }}
                  />
                </Grid>
              </Grid>

              <TextField
                select
                fullWidth
                label="Eu sou:"
                defaultValue="Adotante"
                variant="outlined"
                margin="normal"
                InputProps={{ sx: { borderRadius: 2 } }}
              >
                <MenuItem value="Adotante">Adotante</MenuItem>
                <MenuItem value="Protetor">Protetor</MenuItem>
              </TextField>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#e57373",
                  borderRadius: 10,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#d32f2f" },
                }}
              >
                Criar
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* ----------- Login ----------- */}
        <Grid item xs={12} md={5} >
          <Paper
            elevation={2}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              backgroundColor: "#fff",
              height: "100%",
              display: "flex", flexDirection: "column",

            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#e57373",
                mb: 3,
              }}
            >
              Acesse sua conta
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="E-mail"
                placeholder="email@teste.com"
                variant="outlined"
                margin="normal"
                InputProps={{ sx: { borderRadius: 2 } }}
              />
              <TextField
                fullWidth
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                variant="outlined"
                margin="normal"
                InputProps={{ sx: { borderRadius: 2 } }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#e57373",
                  borderRadius: 10,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#d32f2f" },
                }}
              >
                Entrar
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
