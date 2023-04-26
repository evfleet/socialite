import { AppShell, Navbar, Header, Container } from "@mantine/core";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<AppShell
			padding="md"
			navbar={
				<Navbar width={{ base: 300 }} p="xs">
					{/* Navbar content */}
				</Navbar>
			}
			header={
				<Header height={60} p="xs">
					{/* Header content */}
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
		>
			<Container>{children}</Container>
		</AppShell>
	);
};

export default Layout;
