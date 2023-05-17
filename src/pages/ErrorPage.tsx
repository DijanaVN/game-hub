import { Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box marginTop={5} marginLeft={5}>
        <Text fontSize="30px" as="b">
          Oops
        </Text>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page this not exist"
            : "Unepected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
