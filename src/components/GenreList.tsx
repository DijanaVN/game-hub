import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;
  //   if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={28} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Box
              _hover={{
                transform: "scale(1.1)",
                transitionDuration: "0.5s",
                transitionTimingFunction: "ease-in-out",
                cursor: "pointer",
              }}
              borderRadius={10}
              overflow="hidden"
              key={skeleton}
            >
              <ListItem paddingY={2} key={skeleton}>
                <GenreListSkeleton />
              </ListItem>
            </Box>
          ))}
        {data?.results?.map((genre) => (
          // <GameCardContainer key={genre.id}>
          <ListItem paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
          // </GameCardContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;
