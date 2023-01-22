import { motion } from 'framer-motion';

const Header = () => {
	return (
		<div className='  text-darkblue h-[50vh] grid place-items-center '>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					className=' grid gap-4  tracking-wider py-12'
					initial={{ opacity: .3, scale: .8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 1.4 }}
				>
					<h2 className='text-6xl'>Lost Knowledge of the Apocalypse</h2>
					<div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className='flex space-x-2 text-2xl'
					>
						<span>
							{' '}
							A collection of theories, stories and truths behind the
						</span>{' '}
						<h1 className='font-bold  '>Ancient Apocalypse theory</h1>
					</div>
					<motion.div
						className='border-b-2 opacity-20 pb-8  ml-24 border-darkblue'
						initial={{ opacity: 1, scale: 1.1 }}
						animate={{ opacity: 0.3, scale: 1 }}
						transition={{ delay: 1.1, duration: 1.4 }}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Header;
