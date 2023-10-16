import { Button, SimpleGrid, Spinner, Text, Box } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import ScrollToTopButton from "./ScrollToTheTopButton";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      {/* //with 2 !! mil transform the undefined into bollean */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={10}
      >
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
              <GameCardSkeleton />
            </Box>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.length === 0 ? (
              <Text>
                Currently, there are no games available for this platform.
              </Text>
            ) : (
              page.results.map((game) => (
                <Box
                  _hover={{
                    transform: "scale(1.1)",
                    transitionDuration: "0.5s",
                    transitionTimingFunction: "ease-in-out",
                    cursor: "pointer",
                  }}
                  borderRadius={10}
                  overflow="hidden"
                  key={game.id}
                >
                  <GameCard game={game} />
                </Box>
              ))
            )}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <ScrollToTopButton />
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </InfiniteScroll>
  );
};

export default GameGrid;
