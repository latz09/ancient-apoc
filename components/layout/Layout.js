import Header from './Header';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen bg-white'>
			<motion.div
				initial={{ opacity: 0, scale: .7 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.2, delay: 0.2 }}
			>
				<Header />
			</motion.div>

			<main className='flex-grow'>{children}</main>
			{/* <Footer /> */}
		</div>
	);
};
export default Layout;
