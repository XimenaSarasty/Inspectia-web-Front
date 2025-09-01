"use client"

import { useState } from "react"
import { Typography, TextField, Button, Paper, Box, Link, InputAdornment } from "@mui/material"
import { Email, Lock } from "@mui/icons-material"
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function AuthLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: 0, margin: 0  }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: 300,
            borderRadius: 2,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              variant="h5"
              component="h1"
              align="center"
              sx={{
                marginBottom: 3,
                fontWeight: 600,
                color: "#333",
              }}
            >
              Iniciar Sesión
            </Typography>

            <TextField
              fullWidth
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <TextField
              fullWidth
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#8b5cf6",
                "&:hover": {
                  backgroundColor: "#7c3aed",
                },
                padding: "12px",
                marginBottom: 2,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Entrar
            </Button>

            <Typography variant="body2" align="center" sx={{ color: "#666" }}>
              ¿No tienes cuenta?{" "}
              <Link
                href="#"
                sx={{
                  color: "#8b5cf6",
                  fontWeight: 700,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Regístrate aquí
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  )
}
