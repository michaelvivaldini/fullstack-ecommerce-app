"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { FunctionComponent } from "react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Cart from "./cart";
import { Separator } from "./separator";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="my-4 flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toLocaleUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-3">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} /> Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} /> Fazer Logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} /> Inicio
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/promotions">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentCircleIcon size={16} /> Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} /> Catalogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
