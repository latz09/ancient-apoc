import SectionHeader from '../utils/SectionHeader';
import ArticleCard from '../articles/ArticleCard';

const Section = ({ allArticleCards, category, title, subtitle, image }) => {
	return (
		<div className='grid'>
			<SectionHeader title={title} subtitle={subtitle} image={image}/>
			<div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 max-w-[90rem] mx-auto py-20 lg:py-36">
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
		</div>
	);
};

export default Section;
