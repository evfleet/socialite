import Header from "@/components/Header";
import "../tailwind.css";

export const metadata = {
	title: "Socialite",
};

const RootLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en">
			<body>
				<div className="min-h-screen bg-gray-100">
					<Header />

					<div className="px-4">{children}</div>
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
