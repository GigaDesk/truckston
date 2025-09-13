import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/TVzKLXhg7Snn7QP4we3Ua/17a1d3f6e133a4566a6c8567b1dd233a/pexels-heyho-6782476.jpg',
    title: 'Home and Office Furniture',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/70k2gxB1wAypWNCnbH66tw/d4ff9eeb91f182e7db634a3304091b5b/pexels-padrinan-194096.jpg',
    title: 'Hardware',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/1o2Rj62Z4U0XaFjQRXuSXz/e9bd04e49ff1dcfe5163f277ab1dc77a/pexels-babydov-7788364.jpg',
    title: 'Chemicals',
    author: '@helloimnik',
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/4wnzdi9m8YimBg70lWp2j/d5d6ba83b570441147a3abfe50fac475/pexels-lucaspezeta-2333694.jpg',
    title: 'Machineries',
    author: '@nolanissac',
    featured: true
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/43Nkdpb7JODQMG0czoQvZJ/1f8b3bb23c6c9e9944b914dddd6124a8/pexels-polina-tankilevitch-3735215.jpg',
    title: 'Packaging materials',
    author: '@hjrc33',
    featured: true
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/4VjyfTbUOQ54rxu37ahW8G/f21a6d96f48bd01a8bc9a9d94f06b65f/pexels-markusspiske-126588.jpg',
    title: 'Farm Inputs and Products',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/6uJUuIZNmNgaa9GM7pSmqf/5cff0bc3194397e85498414b081625d8/pexels-sami-aksu-48867324-8931961.jpg',
    title: 'Auto Recovery',
    author: '@tjdragotta',
    featured: true,
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/7sXeytzUQ9jyyNgQfIyTjb/14fcf4e9f75cf54660cb86d15dd8186a/pexels-ron-lach-9594428.jpg',
    title: 'General Goods',
    author: '@katie_wasserman',
    featured: true
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/5lgz3k1y4R7kRmH2eU3NuX/7ef74af7f1e78170a02551878cffe826/pexels-mikebirdy-211761.jpg',
    title: 'House Hold Items',
    author: '@silverdalex',
    featured: true
  },
  {
    img: 'https://images.ctfassets.net/vjt7hlwnzx7i/7bncK8cKn6VLbxAG6FnLae/bc2685afa76e85aae4a1fb33c155031e/pexels-pixabay-459277.jpg',
    title: 'Glasswares',
    author: '@peterlaster',
    featured: true
  },
];



