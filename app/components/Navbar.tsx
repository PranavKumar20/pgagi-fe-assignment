"use client"

import { FC, useState } from "react"
import { CgArrowLongRight } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    const [opened, setOpened] = useState(false);

    function menuClick() {
        setOpened(prevOpened => !prevOpened);
    }

    const menuItems = ["Contact", "Pricing", "Documentation", "Join our community"]

    return (
        <div>
            <div className="flex justify-between py-4 px-6">
                <div className="font-semibold text-2xl" >Toingg</div>
                <div onClick={menuClick} className="text-[#ff9345]" >
                    <GiHamburgerMenu />
                </div>
            </div>
            {opened && <Menu items={menuItems} />}
        </div>
    );
}

interface MenuProps {
    items: string[]
}
const Menu: FC<MenuProps> = ({ items }) => {
    return (
        <div className=" absolute w-[320px] h-screen bg-gradient-to-b from-orange-100 to-orange-600 p-8 mx-8 rounded-lg">
            {items.map((item, index) => (
                <MenuButton key={index} label={item} />
            ))}
        </div>
    );
}

interface MenuButtonProps {
    label: string
}
const MenuButton: FC<MenuButtonProps> = ({ label }) => {
    return <div className="flex justify-between relative my-6">
        <div>
            {label}
        </div>
        <div className="font-thin">
            <CgArrowLongRight />
        </div>
    </div>
}