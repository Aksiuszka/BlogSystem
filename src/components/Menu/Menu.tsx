import React from 'react';
import { MenuContainer } from './styled';

type MenuProps = { children: React.ReactNode };

function Menu({ children }: MenuProps) {
	return <MenuContainer>{children}</MenuContainer>;
}

export default Menu;
