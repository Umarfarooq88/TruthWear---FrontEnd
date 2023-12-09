'use client'
import React, { useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { RxAvatar } from 'react-icons/rx'
import {
    Bars4Icon,
    Cog6ToothIcon,
    GlobeAmericasIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    NewspaperIcon,
    PhoneIcon,
    PowerIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserCircleIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const getUser = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem('siteUser'));
    }
    return null;
}
const user = getUser();

console.log(user)
// Get user Image later
const userImage = null;


const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    },
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: RectangleGroupIcon,
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-white-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="black"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-white-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Shop
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:items-center lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="white"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="white"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Deals</ListItem>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="white"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>
            </Typography>
        </List>
    );
}

export function NavbarWithMegaMenu() {
    const router = useRouter()
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount + 1);
    }
    const addToWishlist = () => {
        setWishlistCount(wishlistCount + 1);
    }

    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );

    }, []);

    const handleClick = (value) => {
        value === 'Login' ? router.push('/login') : router.push('/sign-up');
        console.log(value);
    }


    return (
        <Navbar className="max-w-full sticky rounded-none border-black bg-black text-white bg-opacity-100 " variant="gradient">
            <div className="flex items-center justify-between" >

                {/* <div className='flex w-[30%] p-1 hover:cursor-pointer' onClick={() => { router.replace('/') }}>
                    <img src="/logo.svg" alt="logo" className='p-2 w-[5%]' />
                    <img src="/white-logo.jpg" alt="logo" className='w-[6%]' />
                </div> */}

                <div className="hidden lg:block">
                    <NavList />
                </div>

                {user !== null ?
                    (
                        <ul className="flex justify-between items-center">
                            <li className='p-2 relative px-5 text-xs font- flex flex-col items-center justify-center' onClick={addToWishlist}>
                                <FaRegHeart size={30} color="white" className='p-1' />
                                {wishlistCount > 0 && <span className='absolute top-2 left-[40px] bg-red-500 text-white rounded-full px-2'>{wishlistCount}</span>}
                            </li>
                            <li className='p-2 px-5 text-xs font- flex flex-col items-center justify-center' onClick={addToCart}>
                                <FiShoppingCart size={30} color="white" />
                                {cartCount > 0 && <span className='absolute top-2 right-[58px] bg-red-500 text-white rounded-full px-2'>{cartCount}</span>}
                            </li>
                            <li>
                                <ProfileMenu className="px-5" />
                            </li>
                        </ul>
                    )
                    :
                    <div className="hidden gap-2 lg:flex">
                        <Button variant="text" size="sm" color="white" name="Login" onClick={() => handleClick("Login")}>
                            Log In
                        </Button>
                        <Button variant="gradient" size="sm" name="SignUp" onClick={() => handleClick("sign-up")}>
                            Sign Up
                        </Button>
                    </div>
                }

                <IconButton
                    variant="text"
                    color="white"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="white" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}

const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];
function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    {/* {user !== null ? <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        // If user does not have an image then use the default image
                        src={userImage}
                    /> : <RxAvatar />} */}
                    <RxAvatar color="white" size={40} />

                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}