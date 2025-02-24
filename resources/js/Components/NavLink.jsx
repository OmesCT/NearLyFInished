import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none text-white ' +
                (active
                    ? 'border-yellow-500 text-white focus:border-yellow-500'
                    : 'border-transparent text-white hover:border-yellow-300 hover:text-gray-300 focus:border-gray-300 focus:text-gray-400') +
                ' ' +
                className
            }
        >
            {children}
        </Link>
    );
}
