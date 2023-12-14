"use client";

import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import styles from "./page.module.css";
import theme from "@/app/config/theme";

export default function SocialMedia() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
			}}
		>
			<IconButton
				href="https://www.linkedin.com/in/henrique-lourenco/"
				target="_blank"
				aria-label="Linkedin"
				sx={{ color: "text.primary" }}
			>
				<LinkedIn sx={{ fontSize: theme.spacing(4) }} />
			</IconButton>
			<IconButton
				href="https://github.com/"
				target="_blank"
				aria-label="GitHub"
				sx={{ color: "text.primary" }}
			>
				<GitHub sx={{ fontSize: theme.spacing(4) }} />
			</IconButton>
			<IconButton
				href="https://instagram.com/lourencohenri"
				target="_blank"
				aria-label="Instagram"
				sx={{ color: "text.primary" }}
			>
				<Instagram sx={{ fontSize: theme.spacing(4) }} />
			</IconButton>
		</Box>
	);
}
