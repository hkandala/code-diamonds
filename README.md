![CodeDiamonds Banner](/public/banner.png)

# 💎 CodeDiamonds

An NFT Marketplace for artwork made with code!

We have NFT marketplaces for all different types of media: image, animation, video, audio, etc.
But there are a lot of artists who use code to generate artwork (processing, three.js, css art, etc.).
Currently, for computer-generated art, artists convert them to images or videos and upload them to the marketplaces. This limits the NFTs to be non-interactive and static. What if the code itself is uploaded in NFT instead of media files and marketplaces renders them.

CodeDiamonds is an NFT marketplace for all the artwork that is generated via code.
It supports all code that can be rendered by the browsers. You can also create NFTs for clever code snippets of any language.

#### Features:
- Create and mint NFT in the browser code editor.
- Choose whether the code NFT has to be rendered or display as a snippet
- Explore all the NFTs created by users
- View all your created NFTs

#### Future Work:
Well, there are so many
- Add option to list, create auction, buy and sell
- Have a separate page for each NFT with metadata view and different options to buy
- Add support for NFT collections 
- Add search and filter options in Explore page
- Support multiple wallets
- Support different networks (only Mumbai testnet is supported as of now)
- Make all pages responsive and convert them to PWA

#### How it's made
Following technologies are used to build CodeDiamond:
- ThirdWeb
- nft.storage
- Infura
- Next.js
- Geist UI

Used ThirdWeb to create NFT marketplaces and mint NFTs with the help of their SDK. ThirdWeb Core UI is used to connect to Metamask Wallet.
nft.storage is used to store all NFT data into IPFS/Filecoin. nft.storage will let anyone upload data to decentralized storage (IPFS) which guarantees the NFT data is not mutable and is stored indefinitely. nft.storage API has simplified storing and retrieving data to IPFS clusters.
Next.js and Geist UI are used in building the UI components.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
