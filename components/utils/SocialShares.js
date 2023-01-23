import {
	TwitterShareButton,
	TwitterIcon,
	FacebookShareButton,
	FacebookIcon,
	RedditShareButton,
	RedditIcon,
} from 'next-share';

const SocialShares = ({ url, title }) => {
	const baseShareUrl = 'https://www.ancient-apocalypse.com';
	return (
		<div className='flex space-x-3 place-items-center'>
			<div className='hover:scale-110  transition duration-700'>
				<TwitterShareButton
					url={`${baseShareUrl}/${url}`}
					windowWidth={800}
					windowHeight={700}
					title={title}
				>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
			</div>
			<div className='hover:scale-110  transition duration-700'>
				<FacebookShareButton url={`${baseShareUrl}/${url}`} title={title}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
			</div>
			<div className='hover:scale-110  transition duration-700'>
				<RedditShareButton url={`${baseShareUrl}/${url}`}>
					<RedditIcon size={32} round />
				</RedditShareButton>
			</div>
		</div>
	);
};

export default SocialShares;
