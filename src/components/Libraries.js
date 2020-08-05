import { Flex } from '@chakra-ui/core';
import {
  Framework,
  UiLibrary,
  CssInJs,
  StateManagement,
  ReactDataFetching,
  Fetchers,
  Document,
} from './List';

const Libraries = () => (
  <Flex bg="#eeeef2" wrap="true" direction="column">
    <Framework />
    <Fetchers />
    <StateManagement />
    <ReactDataFetching />
    <CssInJs />
    <UiLibrary />
    <Document />
  </Flex>
);
export default Libraries;
