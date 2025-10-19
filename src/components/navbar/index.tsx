import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Image, MenuProps } from "antd";
import Link from "next/link";

export default function Navbar() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"/"}>Cardápio</Link>,
    },
    {
      key: "2",
      label: <Link href={"/pedidos"}>Meus pedidos</Link>,
    },
    {
      key: "3",
      label: <Link href={"/perfil"}>Meu perfil</Link>,
    },
  ];
  return (
    <nav className="flex w-full justify-center p-3 bg-fuchsia-950">
      <div className="flex w-full justify-between">
        <Link href="/">
          <Image
            preview={false}
            src="/assets/logoPortal.png"
            width={120}
            height={50}
            alt="logo"
          />
        </Link>
        <Dropdown className="m-3" menu={{ items }} placement="bottomLeft">
          <MenuOutlined />
        </Dropdown>
      </div>
    </nav>
  );
}
