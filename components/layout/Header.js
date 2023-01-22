import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='  text-darkblue h-[40vh] lg:h-[50vh] grid place-items-center '>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					className=' grid  gap-4 tracking-wider mx-4'
					initial={{ opacity: 0.3, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 1.4 }}
				>
					<h2 className='text-4xl lg:text-6xl'>
						Lost Knowledge of the Apocalypse
					</h2>
					<div className='text-lg lg:text-2xl'>
						<span>
							{' '}
							A collection of theories, stories and truths behind the:
						</span>{' '}
						<Link
							href={'/articles/ancient-apocalypse/ancient-apocalypse-theory'}
						>
							<motion.h1
								className='font-bold cursor-pointer '
								initial={{ scale: 0.992, opacity: 0.7 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{duration: 1.2, repeat: Infinity, repeatType:'mirror'}}
							>
								Ancient Apocalypse theory
							</motion.h1>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Header;
