import Link from 'next/link';


const Header = () => {
	return (
		<div className='  text-darkblue '>
			<Navbar />
			<div className='max-w-7xl mx-auto'>
				<div className=' grid gap-4  tracking-wider py-12'>
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
				</div>
			</div>
		</div>
	);
};

export default Header;

const Navbar = () => {
	return (
		<div className='max-w-[90rem] mx-auto py-4'>
			<div className='flex'>
				<div>
					<Logo />
				</div>
				<div></div>
			</div>
		</div>
	);
};

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className='px-4 py-2  text-4xl border-darkblue font-light italic border-y hover:scale-105 transition duration-700 cursor-pointer'>
				<span>Lost Knowledge</span>
			</div>
		</Link>
	);
};
