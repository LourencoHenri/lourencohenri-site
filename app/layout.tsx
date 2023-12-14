"use client";

import { Inter } from "next/font/google";
import MuiProvider from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MuiProvider>
			<html lang="en">
				<head>
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<title>lourencohenri</title>
				</head>
				<body className={inter.className}>{children}</body>
			</html>
		</MuiProvider>
	);
}
