import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Avatar,
  Fab,
  Drawer,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function InsureAi() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 👋 I’m Insure AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: "Thanks for your query! I’ll get back with insurance details soon. ✅",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: "100px",
          right: 16,
          bgcolor: "#7C4DFF",
          "&:hover": { bgcolor: "#5b35c4" },
        }}
        onClick={() => setOpen(true)}
      >
        <SmartToyIcon />
      </Fab>

      {/* Drawer (Chat Sidebar) */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 350, display: "flex", flexDirection: "column" },
        }}
      >
        {/* Top App Bar */}
        <AppBar position="static" sx={{ bgcolor: "#7C4DFF" }}>
          <Toolbar>
            <Avatar sx={{ bgcolor: "#fff", color: "#7C4DFF", mr: 2 }}>
              <SmartToyIcon />
            </Avatar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Insure AI
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Chat Window */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            bgcolor: "#f4f6fa",
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Card
                sx={{
                  maxWidth: "70%",
                  bgcolor: msg.sender === "user" ? "#7C4DFF" : "#fff",
                  color: msg.sender === "user" ? "#fff" : "#000",
                  borderRadius: 4,
                }}
              >
                <CardContent>
                  <Typography>{msg.text}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Input Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            borderTop: "1px solid #ddd",
            bgcolor: "#fff",
          }}
        >
          <TextField
            fullWidth
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
