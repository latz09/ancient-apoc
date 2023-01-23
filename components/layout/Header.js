import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';



const Header = ({image}) => {
	return (
		<div className='relative w-full  h-[40vh] lg:h-[60vh]  '>
			<Image
				src={image}
				alt={'ancient apocalypse'}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
				priority='true'
			/>
			<div className='relative grid place-items-center h-full bg-black/50 text-lightblue '>
			<motion.div
					className=' grid  gap-4 tracking-wider mx-4'
					initial={{ opacity: 0.3, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 1.4 }}
				>
					<h2 className='text-4xl lg:text-7xl'>
						Lost Knowledge of the Apocalypse
					</h2>
					<div className='text-lg lg:text-3xl'>
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
								Ancient Apocalypse 
							</motion.h1>
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
};


export default Header