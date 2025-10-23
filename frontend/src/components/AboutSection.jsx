import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import image from "../assets/about-image.jpg";

export function AboutSection() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8, display: "flex" } }}>
      <Box
        sx={{ display: "flex", height: "auto", gap: "4%", justifyContent: "space-between" }}
      >
        {/* Imagem à esquerda */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={image}
            alt="Cães felizes"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        {/* Texto à direita */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#f44336",
              mb: 3,
            }}
          >
            Sobre Nós
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Na PetGift, acreditamos que todo pet merece um lar cheio de amor!
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Criamos esta plataforma para facilitar o encontro entre animais
            resgatados e pessoas dispostas a transformar vidas através da adoção.
          </Typography>

          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Unimos adotantes, protetores e ONGs em um só lugar, com carinho,
            transparência e responsabilidade.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Adotar é um ato de amor — e aqui, ele começa com um clique. 💛
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
}
