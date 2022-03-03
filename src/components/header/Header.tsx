import { ReactElement } from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/images/me.jpg';
import HeaderSocials from './HeaderSocials';

const Header = (): ReactElement => {
	return (
		<header>
			<div className='header__container container'>
				<h5>Hello I'm</h5>
				<h1>Pedro Camargo</h1>
				<h5 className='text-light'>Fullstack Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
