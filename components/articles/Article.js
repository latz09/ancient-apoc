import Link from 'next/link';
import { articleCards } from '../../data/articleCards/cards';
import ArticleCard from './ArticleCard';

const Article = ({ data }) => {
	return (
		<div className='grid lg:grid-cols-5 max-w-[90rem] gap-16 m-8 lg:mx-auto mb-24  place-items-center  '>
			<div className='grid gap-4 text-2xl mb-24 lg:col-span-3 lg:place-self-start'>
				<h1 className='font-bold text-4xl mb-4'>{data.title}</h1>
				{data.content.map((section, index) => (
					<div key={index} className='grid '>
						<Paragraph data={section.paragraph} />
						{section.link.text !== '' && (
							<div className='my-4'>
								<LinkAfterParagraph data={section} />
							</div>
						)}
					</div>
				))}
			</div>
			<div className=" lg:col-span-2 grid gap-8 w-4/5 place-self-end">
				{articleCards.map((article, index) => (
					<div key={index}>
							<ArticleCard
								title={article.title}
								tease={article.tease}
								link={article.link}
							/>
					</div>
				))}
			</div>

		</div>
	);
};

export default Article;

const Paragraph = ({ data }) => {
	let paragraph = data.text;
	let phraseToLink = data.phraseToLink;
	let phraseIndex = paragraph.indexOf(phraseToLink);
	let beforePhrase = paragraph.slice(0, phraseIndex);
	let afterPhrase = paragraph.slice(phraseIndex + phraseToLink.length);
	return (
		<p>
			{beforePhrase}
			<a
				className='  font-bold text-darkblue underline underline-offset-4'
				href={data.link}
				target='_blank.'
				rel='noreferrer'
			>
				{phraseToLink}
			</a>
			{afterPhrase}
		</p>
	);
};

const LinkAfterParagraph = ({ data }) => {
	return (
		<div className='font-bold italic underline underline-offset-4 text-darkblue hover:scale-105 transition duration-700 cursor-pointer '>
			{data.link.type === 'internal' ? (
				<div>
					<Link href={data.link.link}>
						<div>{data.link.text}</div>
					</Link>
				</div>
			) : (
				<a href={data.link.link} target='_blank.' rel='noreferrer'>
					{data.link.text}
				</a>
			)}
		</div>
	);
};
