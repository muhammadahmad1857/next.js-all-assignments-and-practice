import { Textarea } from "@chakra-ui/react";

export default function TextArea(props: any) {
  return (
    <Textarea
      placeholder={props.placeholder}
      rows={props.row}
      cols={32}
      w={props.width}
      mt="30px"
      bg={props.bg}
    ></Textarea>
  );
}
