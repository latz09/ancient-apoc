import Link from 'next/link';

const ArticleCard = ({ title, tease, link }) => {
	return (
		<>
			<Link href={link}>
				<div className='text-lg lg:text-2xl grid gap-4  p-8 shadow hover:shadow-lg hover:scale-105 transition duration-700 cursor-pointer tracking-wider mx-4 lg:mx-0'>
					<div className='text-xl lg:text-3xl font-bold '>{title}</div>
					<div className="font-semibold opacity-50">{tease}</div>
				</div>
			</Link>
		</>
	);
};

export default ArticleCard;
