import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (!isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}
	return (
		<>
			<DesktopSidebar toggleDarkMode={toggleDarkMode} />
			<MobileSidebar toggleDarkMode={toggleDarkMode} />
		</>
	);
};
export default Sidebar;

const DesktopSidebar = ({ toggleDarkMode }) => {
	return (
		<div className='p-3 md:p-6 border-r min-h-screen w-24 md:w-64 hidden sm:block bg-slate-900 text-slate-100'>
			<div className='flex flex-col gap-12 sticky top-10 left-0'>
				<div className='w-full flex justify-center md:justify-start'>
					<img src='/logo.svg' alt='logo' className='hidden md:block text-white' />
					<img src='/mobile-logo.svg' alt='logo' className='block md:hidden' />
				</div>
				<ul className='flex flex-col items-center md:items-start gap-6 text-cyan-50'>
					<Link to={"/"} className='flex gap-2 items-center'>
						<Home size={"24"} />
						<span className='font-bold hidden md:block'>Home</span>
					</Link>
					<Link to={"/favorites"} className='flex gap-2 items-center'>
						<Heart size={"24"} />
						<span className='font-bold hidden md:block'>Favorites</span>
					</Link>
				</ul>
			</div>
			{/* <button onClick={toggleDarkMode} className='mt-4 text-white hidden md:block'>Toggle Dark Mode</button> */}
		</div>
	);
};

const MobileSidebar = ({ toggleDarkMode }) => {
	return (
		<div
			className='flex justify-center gap-10 border-t fixed w-full
			bottom-0 left-0 bg-black/40 backdrop-blur-lg shadow-lg ring-1 ring-black/5 z-10 p-2 sm:hidden 
		'
		>
			<Link to={"/"}>
				<Home size={"24"} className='cursor-pointer text-white' />
			</Link>
			<Link to={"/favorites"}>
				<Heart size={"24"} className='cursor-pointer text-white' />
			</Link>
			{/* <button onClick={toggleDarkMode} className='text-white'>Toggle Dark Mode</button> */}
		</div>
	);
};
