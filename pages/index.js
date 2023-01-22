import { articleCards, sectionImages } from '../data/articleCards/cards';
import Header from '../components/layout/Header'
import Section from '../components/layout/Section';

export default function Home() {
	return (
		<div className='grid '>
			<Header />
			<Section
				allArticleCards={articleCards}
				category={'general'}
				title='Apocalyptic Ancients'
				subtitle=' Understanding the End of the Worlds Past'
				image={sectionImages.general}
			/>
			<Section
				allArticleCards={articleCards}
				category={'evidence'}
				title='Apocalyptic Evidence'
				subtitle='Uncovering the End of the Worlds Past through Scientific Discoveries'
				image={sectionImages.evidence}
			/>
			<Section
				allArticleCards={articleCards}
				category={'example locations'}
				title='Apocalyptic Archaeology'
				subtitle='Uncovering the End of the Worlds Past in Ancient Sites'
				image={sectionImages.exampleLocation}
			/>
			<Section
				allArticleCards={articleCards}
				category={'ancient stories'}
				title='Tales of Doomsday '
				subtitle='Uncovering the End of the Worlds Past in Ancient Narratives'
				image={sectionImages.ancientStory}
			/>
			
		</div>
	);
}
