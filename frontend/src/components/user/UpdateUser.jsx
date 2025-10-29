import React from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem,
  Paper,
  Avatar,
} from "@mui/material";

export function UpdateUser() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "90%",
          maxWidth: 750,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "#e57373", fontWeight: "bold", mb: 3 }}
        >
          Suas Informações
        </Typography>

        <Grid item xs={12}>
          <TextField
            label="Nome Completo"
            fullWidth
            defaultValue="Luiza Silva"
            variant="outlined"
            InputProps={{ sx: { borderRadius: 2 } }}
            sx={{ marginBottom: 3 }}
          />
        </Grid>

        <Box sx={{ height: "auto", display: "flex", justifyContent: "space-between" }}>

          <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column", width: "100%" }}>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Telefone"
                fullWidth
                defaultValue="(99) 9999-9999"
                variant="outlined"
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ marginBottom: 1 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Documento (CPF)"
                fullWidth
                defaultValue="01236547886"
                variant="outlined"
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ marginBottom: 1 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Eu sou"
                fullWidth
                defaultValue="Adotante"
                variant="outlined"
                InputProps={{ sx: { borderRadius: 2 } }}
              >
                <MenuItem value="Adotante">Adotante</MenuItem>
                <MenuItem value="Protetor">Protetor</MenuItem>
              </TextField>
            </Grid>

          </Grid>

          <Grid container spacing={2} sx={{ display: "flex", flexDirection: "column", width: "100%" }}>

            <Grid item xs={12} sm={6}>
              <TextField
                label="E-mail"
                fullWidth
                defaultValue="email@teste.com"
                variant="outlined"
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ marginBottom: 1, marginLeft: { sm: 1 } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Senha"
                type="password"
                fullWidth
                defaultValue="********"
                variant="outlined"
                InputProps={{ sx: { borderRadius: 2 } }}
                sx={{ marginBottom: 1, marginLeft: { sm: 1 } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginLeft: { sm: 2 } }}>
                <Avatar sx={{ width: 56, height: 56, bgcolor: "#bdbdbd" }} />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    backgroundColor: "#9e9e9e",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#757575" },
                  }}
                >
                  Carregar
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>


        {/* Botão editar */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e57373",
              color: "black",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 6,
              textTransform: "none",
              "&:hover": { backgroundColor: "#d32f2f" },
            }}
          >
            Editar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
