import React from "react";

import Header from "../Header";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="min-h-screen bg-gray-100">
			<Header />

			<div className="px-4">{children}</div>
		</div>
	);
};

export default Layout;
