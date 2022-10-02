import {
  Navbar,
  Text,
  Button,
  Dropdown,
  Avatar,
  Input,
  Badge,
} from "@nextui-org/react";
import { SearchIcon } from "./searchIcon";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

import { useSession, signIn, signOut } from "next-auth/react";
export default function Navigation() {
  const { data: session } = useSession();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const getSession = () => {
    if (session) {
      return (
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              {/* <Avatar
                bordered
                as="button"
                color="warning"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              /> */}
              <Avatar text="AK" size="md" color="gradient" textColor="white" />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="warning"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
              {session.user.email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              {/* <Link href="/auth/signout">
                <a onClick={() => signOut()}><b>Logout</b></a>
              </Link> */}
              <a className="text-current font-bold" onClick={() => signOut()}><b>Logout</b></a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return (
      <Navbar.Item>
        <Link href="auth/signin">
          {/* <a className="text-current font-bold" onClick={() => signIn()}><b>Login</b></a> */}
          <a className="text-current font-bold"><b>Login</b></a>
        </Link>
      </Navbar.Item>
    );
  };
  return (
    <Navbar
      isBordered
      variant="floating"
      css={{
        background: "inherit",
      }}
      className="fixed"
    >
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand css={{ mr: "$4" }}>
        <Text b color="inherit" hideIn="xs">
          CRAFT SHOP
        </Text>
      </Navbar.Brand>
      {/* <Navbar.Content enableCursorHighlight activeColor="warning" hideIn="xs" variant="highlight-rounded">
        <Navbar.Link isActive href="#">
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="#">Team</Navbar.Link>
        <Navbar.Link href="#">Activity</Navbar.Link>
        <Navbar.Link href="#">Settings</Navbar.Link>
      </Navbar.Content> */}
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
        <Navbar.Item>
          <Badge color="error" size="sm" content={2} shape="rectangle">
            <FiShoppingCart className="w-6 h-6" />
          </Badge>
        </Navbar.Item>
        {getSession()}
        {/* <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="warning"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="warning"
            onAction={(actionKey) => console.log({ actionKey })}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
