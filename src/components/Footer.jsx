import { Box, Container, Grid, Typography, Link } from "@mui/material"
import { Shield, Email, Phone, LocationOn } from "@mui/icons-material"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "white",
        py: 2,
        margin: 0,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ marginLeft: 14, alignContent: "center" }}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <img
                src="/escudoSeguridad.png"
                alt="Inspectia-Web Logo"
                style={{ width: 28, height: 28 }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                INSPECTIA-WEB
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.6,
              }}
            >
              Plataforma líder en gestión de pruebas QA con inteligencia artificial.
            </Typography>
          </Grid>

          {/* Servicios */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Servicios
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Testing Automatizado
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Testing Manual
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Reportes y Métricas
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Gestión de Equipos
              </Link>
            </Box>
          </Grid>

          {/* Empresa */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Empresa
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Acerca de Nosotros
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Certificaciones
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Casos de Éxito
              </Link>
              <Link
                href="#"
                sx={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "white" },
                }}
              >
                Blog
              </Link>
            </Box>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contacto
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 16, color: "#cbd5e1" }} />
                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                  inspectia-web@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 16, color: "#cbd5e1" }} />
                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ fontSize: 16, color: "#cbd5e1" }} />
                <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                  Colombia, Medellín
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid #374151",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
            © 2025 INSPECTIA-WEB. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
