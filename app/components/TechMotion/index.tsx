"use client";

import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import theme from "@/app/config/theme";
import {
	SiGit,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiTypescript,
} from "react-icons/si";
import { cloneElement } from "react";

export default function TechMotion() {
	return (
		<motion.div
			className="box"
			animate={{
				scale: [1, 1, 1, 1, 1],
				rotate: [0, 90, 180, 270, 360],
				borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			}}
			transition={{
				duration: 4,
				ease: "easeInOut",
				times: [0, 0.25, 0.5, 0.75, 1],
				repeat: Infinity,
				repeatDelay: 0,
			}}
		>
			<SiJavascript size={48} />
		</motion.div>
	);
}
