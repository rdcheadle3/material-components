'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navLink.module.css';

const NavLink = ({ item, children }) => {
    const pathName = usePathname();

    return (
        <Link href={item.path} className={styles.navLink}>
            {children || item.title}
        </Link>
    );
}

export default NavLink;
