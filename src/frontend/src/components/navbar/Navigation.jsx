"use client";
import Link from "next/link";
import { Input, Badge, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="fixed mx-2 md:mx-8 left-0 right-0 mt-1 md:mt-2 rounded-lg border navbar-bg dark:bg-transparent shadow-xl backdrop-blur-md backdrop-saturate-150 z-50">
      <ul className="flex gap-2 text-md md:text-lg my-2 md:my-4 items-center px-2">
        <li className="font-bold grow">
          <Link href="/">Craft Shop</Link>
        </li>
        <li className="relative">
          <Input
            isClearable
            radius="lg"
            placeholder="Type to search..."
            className="bg-transparent"
            classNames={{
              input: "bg-transparent",
              innerWrapper: "bg-transparent"
            }}
            startContent={
              <FiSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-auto flex-shrink-0" />
            }
          />
        </li>
        <li className="relative inline-flex items-center mx-4">
          <Badge content="9" color="danger">
            <FiShoppingCart className="w-6 h-6" />
          </Badge>
        </li>
        {/* <li className="font-bold">Login</li> */}
        <li><Dropdown placement="bottom-end" className="dark:bg-black">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown></li>
      </ul>
    </nav>
  );
};

export default Navigation;
