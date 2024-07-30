import { Input } from "@chakra-ui/react";

export default function Input1(props: any) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      required
      bg={props.bg}
      border={props.border}
      w={props.width}
      size="md"
      mt="30px"

    />
  );
}
