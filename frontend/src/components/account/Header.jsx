import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export function Header() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", background: "#D9D9D9" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
          <img src="../logo.png" alt="Logo" style={{ height: 120 }} />
        </Box>

        {/* Itens de navegação */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <Button color="inherit" sx={{ fontWeight: 700 }}>
            Sobre Nós
          </Button>
          <Button color="inherit" sx={{ fontWeight: 700 }}>
            Quero Adotar
          </Button>
          <Button color="inherit" sx={{ fontWeight: 700 }}>
            FAQ
          </Button>
        </Box>

        {/* Botão de login / cadastro */}
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px", textTransform: "none",
            backgroundColor: "#E05D5D", fontWeight: 700, color: "black",
          }}
        >
          Entrar | Cadastrar-se
        </Button>
      </Toolbar>
    </AppBar>
  );
}
