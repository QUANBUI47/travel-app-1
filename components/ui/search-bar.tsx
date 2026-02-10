import { View, StyleSheet } from "react-native";

import { Input } from "./input";

export type SearchBarProps = Omit<React.ComponentProps<typeof Input>, "startContent"> & {
  /** Icon bên trái (vd: Search từ lucide-react-native) */
  searchIcon?: React.ReactNode;
};

export function SearchBar({
  searchIcon,
  placeholder = "Tìm kiếm...",
  ...rest
}: SearchBarProps) {
  return (
    <Input
      placeholder={placeholder}
      startContent={searchIcon ?? undefined}
      returnKeyType="search"
      {...rest}
    />
  );
}
