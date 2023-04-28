import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GamecardContainer";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  //   if (isLoading) return <Spinner />;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <ListItem paddingY={2} key={skeleton}>
              <GenreListSkeleton />
            </ListItem>
          </GameCardContainer>
        ))}
      {data.map((genre) => (
        <GameCardContainer key={genre.id}>
          <ListItem paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </GameCardContainer>
      ))}
    </List>
  );
};

export default GenreList;
