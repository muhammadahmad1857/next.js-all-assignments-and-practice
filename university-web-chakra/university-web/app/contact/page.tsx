"use client";

import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import Header from "../(components)/header";
import Input1 from "../(components)/input";
import Details from "../(components)/details";
import TextArea from "../(components)/textArea";
import Btn from "../(components)/button";

export default function Contact() {
  return (
    <>
      <Box>
        <Header title="CONTACT US" />
      </Box>
      <Box pl="100px" pr="100px" mt="100px">
        <AspectRatio ratio={16 / 5}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.75393791387557!2d73.02023960605263!3d31.4399323267987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392243f819870291%3A0x7ba3efe304b82285!2sRazzi%20Designs!5e0!3m2!1sen!2s!4v1693667097766!5m2!1sen!2s" />
        </AspectRatio>
      </Box>
      <Flex justify="space-between" mt="100px">
        <Box pl="100px">
          <Details
            icon="fa fa-home"
            text="Ghaziabad, Uttar Pradesh, IN"
            heading="NH9 Road, ABC Building"
          />
          <Details
            icon="fa fa-phone"
            text="Monday To Saturday, 9AM To 6PM"
            heading="+91 7445546525"
          />
          <Details
            icon="fa fa-envelope"
            text="Email Us Yor Query"
            heading="xyz@email.com"
          />
        </Box>
        <Box as="form" pr="120px">
          <Input1 placeholder="Enter Name" type="text" width="350px" />
          <br />
          <Input1
            placeholder="Enter Email"
            type="email"
            margin="30px"
            width="350px"
          />
          <br />
          <Input1
            placeholder="Enter Subject"
            type="text"
            margin="30px"
            width="350px"
          />
          <br />

          <TextArea placeholder="Message" row="8" />
          <br />
          <Btn text="Send Message" border="1px solid #5236f4" color="#5236f4" />
        </Box>
      </Flex>
    </>
  );
}
