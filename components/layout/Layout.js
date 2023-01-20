import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen bg-white'>
			<div className="mb-8 lg:mb-16">
				<Header />
			</div>
			<main className='flex-grow'>{children}</main>
			{/* <Footer /> */}
		</div>
	);
};
export default Layout;
