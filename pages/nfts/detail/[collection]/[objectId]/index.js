import { useRouter } from 'next/router';

const NFT = () => {
  const router = useRouter();
  const { collection } = router.query;
  const { objectId } = router.query;

  console.log("location", router);

  return (
    <>
        <h1> NFT Detail</h1>
        <h2>CollectionAdress: {collection}</h2>
        <h2>Object Id: {objectId}</h2>
        <p>
        NFT Slug: nfts/detail/{collection}/{objectId}
        </p>
    </>
  );
};

export default NFT;
