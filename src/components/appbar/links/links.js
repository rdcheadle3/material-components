import NavLink from './navLink/navLink';

const Links = () => {

    const links = [
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Shopping Cart',
            path: '/cart',
        }
    ];

    return (
        <div>
            {links.map((link=>(
                <NavLink item={link} key={link.title}/>
            )))}
        </div>
    )
}

export default Links;