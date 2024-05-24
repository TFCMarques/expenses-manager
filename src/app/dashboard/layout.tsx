"use client";

import {
  ArrowRightLeft,
  Coins,
  LayoutDashboard,
  LucideIcon,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { capitalize } from "lodash";
import React from "react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: ArrowRightLeft,
  },
  {
    label: "Account",
    href: "/dashboard/account",
    icon: UserRound,
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path: string = usePathname();
  const breadcrumbs: string[] = path.split("/").filter((crumb) => crumb !== "");

  return (
    <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b h-[57px] flex items-center justify-center">
          <Coins className="size-6" />
        </div>
        <nav className="grid gap-2 p-2">
          <TooltipProvider>
            {navItems.map((item, index) => {
              const NavItemIcon = item.icon;

              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <Button
                        aria-label={item.label}
                        variant="ghost"
                        size="icon"
                        className={cn(
                          "rounded-lg",
                          path === item.href ? "bg-accent" : "transparent"
                        )}
                      >
                        <NavItemIcon className="size-5" />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-8">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => {
                const href = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
                const isLast = index === breadcrumbs.length - 1;

                if (isLast) {
                  return (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbPage className="font-semibold">
                        {capitalize(crumb)}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  );
                }

                return (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={href}>
                        {capitalize(crumb)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
