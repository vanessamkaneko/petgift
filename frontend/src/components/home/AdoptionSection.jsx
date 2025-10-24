import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const pets = [
  {
    id: 1,
    name: "Jambo",
    sex: "Macho",
    age: "Filhote",
    species: "Canina",
    status: "Disponível",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Jujuba",
    sex: "Fêmea",
    age: "Filhote",
    species: "Canina",
    status: "Disponível",
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Tutu",
    sex: "Macho",
    age: "Adulto",
    species: "Felina",
    status: "Disponível",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80",
  },
];


export function AdoptionSection() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 8 }, textAlign: "center" }}>
      {/* Cabeçalho */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#f44336", flex: 1, textAlign: "center" }}
        >
          Quero Adotar
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f44336",
          color: "black",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "20px",
          px: 3,
          marginBottom: "40px",
          "&:hover": { backgroundColor: "#d32f2f" },
        }}
      >
        Ver pets disponíveis
      </Button>

      {/* Filtros */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
        <Grid item>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Ambos os sexos</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">Ambos os sexos</MenuItem>
              <MenuItem value="Macho">Macho</MenuItem>
              <MenuItem value="Fêmea">Fêmea</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Todas as idades</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">Todas as idades</MenuItem>
              <MenuItem value="Filhote">Filhote</MenuItem>
              <MenuItem value="Adulto">Adulto</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Ambas as espécies</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">Ambas as espécies</MenuItem>
              <MenuItem value="Canina">Canina</MenuItem>
              <MenuItem value="Felina">Felina</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f44336",
              textTransform: "none",
              color: "black",
              fontWeight: "bold",
              borderRadius: "20px",
              marginTop: "10px",
              px: 3,
              "&:hover": { backgroundColor: "#d32f2f" },
            }}
          >
            Filtrar pets
          </Button>
        </Grid>
      </Grid>

      {/* Lista de pets */}
      <Typography
        variant="h5"
        sx={{
          color: "#f44336",
          fontWeight: 500,
          mb: 4,
        }}
      >
        Pets para adoção
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {pets.map((pet) => (
          <Grid item key={pet.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 300,
                mx: "auto",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={pet.image}
                alt={pet.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Nome: {pet.name}
                </Typography>
                <Typography>Sexo: {pet.sex}</Typography>
                <Typography>Idade: {pet.age}</Typography>
                <Typography>Espécie: {pet.species}</Typography>
                <Typography>Status: {pet.status}</Typography>
              </CardContent>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#f44336",
                  borderRadius: "20px",
                  textTransform: "none",
                  mb: 2,
                  "&:hover": { backgroundColor: "#d32f2f" },
                }}
              >
                Quero Adotar!
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
