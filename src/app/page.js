"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import useFirebaseAuth from "@/shared/hooks/firebase/useFirebaseAuth";
import withNotifications from "@/shared/hoc/withNotifications";
import { Typography } from "@mui/material";

const SignIn = ({ notify }) => {
  const { signIn } = useFirebaseAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await signIn(email, password);
      router.push("/home");
    } catch (err) {
      notify(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "auto",
        maxWidth: { lg: "1100px", xs: "100%" },
        borderRadius: 2,
        maxHeight: "650px",
        overflow: "hidden",
        margin: "auto",
        border: { xs: 0, lg: 1 },
        borderColor: { lg: "grey.400", xs: "transparent" },
      }}
    >
      <Box
        sx={{
          flex: "45%",
          // maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <Typography variant="h5" mb={3} color="secondary.dark">
          Welcome to ChatHub
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, maxWidth: "400px" }}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Sign In
          </Button>
          <Box>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: "55%",
          background:
            "linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
          minHeight: "550px",
          display: { xs: "none", lg: "inline-flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "420px" }}>
          <Typography variant="h4" mb={4} color="white">
            Connect & Communicate: Your World in One Chat!
          </Typography>
          <Typography paragraph mb={2} fontSize={18} color="white">
            Welcome to our revolutionary web chat app, where seamless
            communication meets boundless possibilities.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default withNotifications(SignIn);
