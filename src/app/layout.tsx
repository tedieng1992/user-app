'use client'
import AuthProvider from "@/context/auth-context";
import { StyledEngineProvider } from "@mui/material";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </StyledEngineProvider>
    </html>
  );
}
