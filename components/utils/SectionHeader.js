import Image from 'next/image';

const SectionHeader = ({ title, subtitle, image }) => {
	return (
		<div className='relative w-full  h-[40vh]  '>
			<Image
				src={image}
				alt={title}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
				priority='true'
			/>
			<div className='relative grid place-items-center h-full bg-black/70 '>
				<div className='grid gap-3 text-white  tracking-widest max-w-3xl mx-auto'>
					<div className="text-5xl scale-y-125 font-bold text-lightblue">{title}</div>
                    <div className="text-3xl ">{subtitle}</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
