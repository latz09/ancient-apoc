import Link from 'next/link';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen bg-white'>
			<div
				
			>
				<Navbar />
			</div>

			<main className='flex-grow'>{children}</main>
			{/* <Footer /> */}
		</div>
	);
};
export default Layout;

const Navbar = () => {
	return (
		<div className=' max-w-[90rem] mx-auto'>
			<div className="flex py-6 px-4">
				<Logo />
			</div>
		</div>
	);
};

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className='px-4 py-2  text-2xl lg:text-4xl border-darkblue/30 font-light italic border-y hover:scale-105 hover:border-darkblue/100 transition duration-700 cursor-pointer'>
				<span>Lost Knowledge</span>
			</div>
		</Link>
	);
};
