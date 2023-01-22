import Link from 'next/link';

const ArticleCard = ({ title, tease, link }) => {
	return (
		<>
			<Link href={link}>
				<div className='cursor-pointer grid gap-4 mx-4'>
					<div className='text-xl lg:text-3xl font-bold '>{title}</div>
					<div className="md:text-xl font-semibold opacity-50">{tease}</div>
				</div>
			</Link>
		</>
	);
};

export default ArticleCard;
