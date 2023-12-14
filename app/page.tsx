"use client";

import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import SocialMedia from "./components/SocialMedia";
import styles from "./page.module.css";
import logo from "../public/logo.svg";
import theme from "./config/theme";
import Image from "next/image";
import { useState } from "react";

import TechMotion from "./components/TechMotion";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
	const [tabValue, setTabValue] = useState("home");

	const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
		setTabValue(newValue);
	};

	return (
		<Box component="main" className={styles.container}>
			<AppBar sx={{ opacity: 0.975 }}>
				<Toolbar
					sx={{
						backgroundColor: "background.default",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography component={"a"}>
						<Image src={logo} alt={"Logo"}></Image>
					</Typography>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						aria-label="wrapped label tabs example"
					>
						<Tab value="home" label="Home" />
						<Tab value="about" label="About" />
						<Tab value="skills" label="Skills" />
						<Tab value="projects" label="Projects" />
						<Tab value="contact" label="Contact" />
					</Tabs>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					justifyContent: "space-between",
					padding: theme.spacing(4),
					display: "flex",
					width: "100%",
					height: "100vh",
				}}
			>
				<SocialMedia />

				<Box
					sx={{
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
						display: "flex",
					}}
				>
					<Typography
						variant="h6"
						className={styles.subtitle}
						sx={{
							justifyContent: "center",
							width: "100%",
						}}
					>
						HI I'M
					</Typography>
					<Typography variant="h1" className={styles.title}>
						HENRIQUE
					</Typography>
					<Box>
						<Typography
							variant="h6"
							className={styles.subtitle}
							sx={{ color: "primary.main" }}
						>
							FRONTEND DEVELOPER
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						visibility: "hidden",
					}}
				>
					<SocialMedia />
				</Box>
			</Box>

			<Box
				sx={{
					padding: theme.spacing(4),
					justifyContent: "center",
					alignContent: "center",
					gap: theme.spacing(4),
					alignItems: "center",
					display: "flex",
					height: "100vh",
				}}
			>
				<Box sx={{ width: "60%" }}>
					<Typography variant="h3" sx={{ marginBottom: theme.spacing(2) }}>
						About me
					</Typography>
					<Typography variant="h6">
						My name is Henrique Lourenço. I am a web developer and live in
						Santos, Brazil. I'm very passionate and dedicated to my work. I like
						the lifelong learning style, I always want to improve and acquire
						knowledge. With about 1 year experiences as web developer, I have
						acquired the skills necessary to build great and premium websites.
					</Typography>
				</Box>
				<Box>
					<SiNextdotjs size={240} />
				</Box>
			</Box>
		</Box>
	);
}
