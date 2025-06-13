import NotFound from "@/assets/Icons/NotFound";
import SearchIcon from "@/assets/Icons/SearchIcon";
import React, { JSX } from "react";

export interface name {
  name: string;
}

interface IconMap {
  [key: string]: JSX.Element;
}

const Icon: React.FC<{
  name: name["name"];
  className?: string;
  onClick?: () => void;
}> = ({ name, className, onClick }) => {
  const iconMap: IconMap = {
    searchIcon: <SearchIcon className={className} />,
    notFound: <NotFound className={className} />,
  };

  const icon = iconMap[name] || null;

  if (!icon) return null;

  return React.cloneElement(icon, { className, onClick });
};

export default Icon;
