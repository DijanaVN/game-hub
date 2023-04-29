import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "./../hooks/usePlatforms";
import usePlatforms from "./../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem onClick={() => onSelectedPlatform(item)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
