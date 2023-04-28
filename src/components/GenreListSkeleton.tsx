import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card>
      <Skeleton height="32px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreListSkeleton;
