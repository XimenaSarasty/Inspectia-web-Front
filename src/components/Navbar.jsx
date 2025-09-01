import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderBottom: "1px solid #e5e7eb",
        margin: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="/escudoSeguridad.png"
              alt="Inspectia-Web Logo"
              style={{ width: 32, height: 32 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#111827",
                fontSize: "1.25rem",
              }}
            >
              INSPECTIA-WEB
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              <Button
                sx={{
                  color: "#374151",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    color: "#111827",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Servicios
              </Button>
              <Button
                sx={{
                  color: "#374151",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    color: "#111827",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Normas ISO
              </Button>
              <Button
                sx={{
                  color: "#374151",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    color: "#111827",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Tipos de Pruebas
              </Button>
              <Button
                sx={{
                  color: "#374151",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    color: "#111827",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Contacto
              </Button>
            </Box>

            {/* Login Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8b5cf6",
                color: "white",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: 1.5,
                "&:hover": {
                  backgroundColor: "#7c3aed",
                },
              }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
