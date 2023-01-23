import ArticleCard from "../articles/ArticleCard";

const FirstSection = ({allArticleCards, category}) => {
	return (
		<div className='grid lg:grid-cols-2 items-center gap-12 lg:gap-24 max-w-[90rem] mx-auto py-16 md:py-20 '>
			{allArticleCards
				.filter((article) => article.category === category)
				.map((article, index) => (
					<div key={index} className=' '>
						<ArticleCard
							title={article.title}
							tease={article.tease}
							link={article.link}
						/>
					</div>
				))}
		</div>
	);
};

export default FirstSection;
