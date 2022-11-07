import Link from 'next/link';

function NftPages() {
  const nft = { collection: 1, objectId: 3 };

  return (
    <>
      <h1>NFTs</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: '/nfts/detail/[collection]/[objectId]',
              query: { collection: nft.collection, objectId: nft.objectId },
            }}
          >
            NFT Detail
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NftPages;
