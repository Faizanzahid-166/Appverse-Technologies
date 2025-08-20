const NFTS = [
  {
    "id": "1",
    "name": "NeoGeo Pixel Arena",
    "artist": "RetroVision Studio",
    "price": 0.30,
    "dateMinted": "2025-08-20",
    "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSarnVJB1yPxWZ3xkv_l4D5BeCPi4GDaRMSD05nB5jSaXjQN3Db",
    "description": "A throwback to street-fighting glory in pixel form.",
    "attributes": [
      { "trait_type": "Style", "value": "16-bit Pixel" },
      { "trait_type": "Genre", "value": "Arcade" }
    ],
    "category": "Art"
  },
  {
    "id": "2",
    "name": "Cartoon Saturday Splash",
    "artist": "ToonMasters",
    "price": 0.25,
    "dateMinted": "2025-08-20",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsHIuFxp4XqwQ0U69paSK_SNm3N8avcVqjg&s",
    "description": "Vibrant colors in a playful, Saturday-morning texture.",
    "attributes": [
      { "trait_type": "Mood", "value": "Playful" },
      { "trait_type": "Era", "value": "80s Cartoon" }
    ],
    "category": "Art"
  },
  {
    "id": "3",
    "name": "NeoGeo 3D Racer",
    "artist": "PixelFlight 3D",
    "price": 0.40,
    "dateMinted": "2025-08-20",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k1TCL86ivFDRPa_RxjIF19MfcF3VS1Hwnw&s",
    "description": "Shimmering neon tracks rendered in nostalgic 3D polygons.",
    "attributes": [
      { "trait_type": "Technique", "value": "Low-poly 3D" },
      { "trait_type": "Theme", "value": "Racing" }
    ],
    "category": "3D"
  },
  {
    "id": "4",
    "name": "Vintage Arcade Photograph",
    "artist": "PhotoNostalgic",
    "price": 0.18,
    "dateMinted": "2025-08-20",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQEIgdRiQeCDGpfOrNQk4WDnUKp8eHaoJow&s",
    "description": "An aged photograph capturing the glow of classic arcade cabinets.",
    "attributes": [
      { "trait_type": "Medium", "value": "Analog Photo" },
      { "trait_type": "Filter", "value": "Sepia" }
    ],
    "category": "Photography"
  },
  {
    "id": "5",
    "name": "NeoGeo Mech Showdown",
    "artist": "MechPixel 3D",
    "price": 0.45,
    "dateMinted": "2025-08-21",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26JtX4-8kMwHTy8iu9xziWZOmVZCnCenhFg&s",
    "description": "Battle-ready mechs frozen in retro-futuristic 3D detail.",
    "attributes": [
      { "trait_type": "Type", "value": "Mecha" },
      { "trait_type": "Style", "value": "Retro 3D" }
    ],
    "category": "3D"
  },
  {
    "id": "6",
    "name": "Cartoon Duo in Frame",
    "artist": "FrameInk",
    "price": 0.27,
    "dateMinted": "2025-08-21",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_UMNMNNMkU4Et3McwNhZZQP2x6OfBQTMCA&s",
    "description": "A still-frame snapshot of classic cartoon pals.",
    "attributes": [
      { "trait_type": "Characters", "value": "Dynamic Duo" },
      { "trait_type": "Technique", "value": "Film Still" }
    ],
    "category": "Photography"
  },
  {
    "id": "7",
    "name": "Synthwave NeoGeo City",
    "artist": "NightDrive Art",
    "price": 0.38,
    "dateMinted": "2025-08-22",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3nXSQCdRy-xdALshWgT8l73e7CXnwKeP3Q&s",
    "description": "A neon-lit cityscape infused with synthwave vibes.",
    "attributes": [
      { "trait_type": "Palette", "value": "Neon Pink/Blue" },
      { "trait_type": "Mood", "value": "Futuristic" }
    ],
    "category": "Art"
  },
  {
    "id": "8",
    "name": "3D Retro Platformer Scene",
    "artist": "PolyRetro",
    "price": 0.35,
    "dateMinted": "2025-08-22",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbz7ifgl1cpULfLm0ea3sG3DeXhwQi_7bRw&s",
    "description": "A blocky world with floating platforms and vintage charm.",
    "attributes": [
      { "trait_type": "Style", "value": "Voxel Art" },
      { "trait_type": "Theme", "value": "Platformer" }
    ],
    "category": "3D"
  },
  {
    "id": "9",
    "name": "Polaroid Toon Sketch",
    "artist": "ToonPhotogrph",
    "price": 0.20,
    "dateMinted": "2025-08-22",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kLZd-kbgCPOOS8uQXLZVInB2aPrCxIv90w&s",
    "description": "An analog polaroid capturing cartoon doodles in real life.",
    "attributes": [
      { "trait_type": "Format", "value": "Polaroid" },
      { "trait_type": "Mood", "value": "Quirky" }
    ],
    "category": "Photography"
  },
  {
    "id": "10",
    "name": "Pixel Art City Skyline",
    "artist": "NeoPixel Art",
    "price": 0.33,
    "dateMinted": "2025-08-23",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQArB-8DtymZwOj28BnLHiiAcGHx6gm3zqbYw&s",
    "description": "Pixelated skyscrapers glowing under a retro moonlight sky.",
    "attributes": [
      { "trait_type": "Palette", "value": "Blue/Yellow" },
      { "trait_type": "Style", "value": "Pixel Art" }
    ],
    "category": "Art"
  },
  {
    "id": "11",
    "name": "Gem-textured 3D Fighter",
    "artist": "Combat3D",
    "price": 0.48,
    "dateMinted": "2025-08-23",
    "image": "https://i2.seadn.io/collection/mallowinc/image_type_preview_media/bf6e7f6a188821052512470eac9617/a6bf6e7f6a188821052512470eac9617.png?w=1920",
    "description": "A vintage style fighter sculpted with gem-like surfaces.",
    "attributes": [
      { "trait_type": "Technique", "value": "Low-poly Gem" },
      { "trait_type": "Genre", "value": "Fighting" }
    ],
    "category": "3D"
  },
  {
    "id": "12",
    "name": "Vintage Game Poster Photo",
    "artist": "FrameRetro",
    "price": 0.22,
    "dateMinted": "2025-08-23",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAn2CBGfUZoBn94Tt3Ap43cchB-mUlMW1r5A&s",
    "description": "A photograph of an old arcade poster, grainy and nostalgic.",
    "attributes": [
      { "trait_type": "Filter", "value": "Grainy" },
      { "trait_type": "Medium", "value": "Analog Film" }
    ],
    "category": "Photography"
  },
  {
    "id": "13",
    "name": "Cartoon Hero Collage",
    "artist": "HeroPop Art",
    "price": 0.29,
    "dateMinted": "2025-08-24",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqY6a49MPm9pMDRQq1TYqqXjsfJGUquzLgA&s",
    "description": "A pop-art style collage featuring cartoon heroes.",
    "attributes": [
      { "trait_type": "Style", "value": "Pop Art" },
      { "trait_type": "Mood", "value": "Vibrant" }
    ],
    "category": "Art"
  },
  {
    "id": "14",
    "name": "Neon 3D Street Fighter",
    "artist": "PixelForce 3D",
    "price": 0.46,
    "dateMinted": "2025-08-24",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRrI8oWkA1e6BsprUkXOpDZZkli-1Z0T-SA&s",
    "description": "A classic fighter remade in glowing 3D polygons.",
    "attributes": [
      { "trait_type": "Genre", "value": "Fighting" },
      { "trait_type": "Style", "value": "Neon Poly" }
    ],
    "category": "3D"
  },
  {
    "id": "15",
    "name": "Retro Cartoon Group Shot",
    "artist": "ToonGallery",
    "price": 0.24,
    "dateMinted": "2025-08-24",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuAsoMA0B0TTqIEXKbVNassBgGsLs4q8J5w&s",
    "description": "A snapshot-style photo of cartoon characters hanging out.",
    "attributes": [
      { "trait_type": "Group", "value": "Classic Crew" },
      { "trait_type": "Technique", "value": "Portrait Photo" }
    ],
    "category": "Photography"
  },
  {
    "id": "16",
    "name": "Cyber Neo Art Poster",
    "artist": "NeoArt Collective",
    "price": 0.31,
    "dateMinted": "2025-08-25",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJEAiJGGUcJHMHaqAslbPLVauH6jFevN1CQ&s",
    "description": "A digital art poster glowing with neon and glitch effects.",
    "attributes": [
      { "trait_type": "Palette", "value": "Cyan/Magenta" },
      { "trait_type": "Style", "value": "Glitch Art" }
    ],
    "category": "Art"
  },
  {
    "id": "17",
    "name": "Voxel Dungeon 3D",
    "artist": "DungeonVoxel",
    "price": 0.37,
    "dateMinted": "2025-08-25",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UAX58o2RI3zIhRt7XM0ALtTwLj1rWsw1JQ&s",
    "description": "A moody dungeon scene built from voxel blocks.",
    "attributes": [
      { "trait_type": "Style", "value": "Voxel Art" },
      { "trait_type": "Theme", "value": "Dungeon" }
    ],
    "category": "3D"
  },
  {
    "id": "18",
    "name": "Analog Cartoon Sketch Photo",
    "artist": "SketchCapture",
    "price": 0.26,
    "dateMinted": "2025-08-25",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWU6uZodKiBaEjZR-7b6nIjTJa1kF_fKkJkg&s",
    "description": "A close-up of hand-drawn cartoon art via analog film.",
    "attributes": [
      { "trait_type": "Medium", "value": "Film Photo" },
      { "trait_type": "Brush", "value": "Hand-drawn" }
    ],
    "category": "Photography"
  },
  {
    "id": "19",
    "name": "NeoGeo Title Card Artwork",
    "artist": "CardCraft Art",
    "price": 0.34,
    "dateMinted": "2025-08-26",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RlWoIGms5-UCYPuYbmv-jTmIfmkEUyGc-A&s",
    "description": "A stylized title card inspired by classic fighting games.",
    "attributes": [
      { "trait_type": "Typography", "value": "Bold Retro" },
      { "trait_type": "Genre", "value": "Fighting" }
    ],
    "category": "Art"
  },
  {
    "id": "20",
    "name": "Polygonal 3D Boss Fight",
    "artist": "BossModel 3D",
    "price": 0.50,
    "dateMinted": "2025-08-26",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmy3-ChvYIEAYKZQ5hUhWFY85lUVVcvUKgug&s",
    "description": "A towering final boss recreated in chunky 3D polygons.",
    "attributes": [
      { "trait_type": "Boss Type", "value": "Giant" },
      { "trait_type": "Style", "value": "Low-poly 3D" }
    ],
    "category": "3D"
  },
  {
    "id": "21",
    "name": "Vintage Game Cabinet Photo",
    "artist": "CabinetShots",
    "price": 0.23,
    "dateMinted": "2025-08-26",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40t4yUCXCYq4vKALI7DTddTFPskhReeIghA&s",
    "description": "A rustic photograph of a weathered arcade game cabinet.",
    "attributes": [
      { "trait_type": "Condition", "value": "Worn" },
      { "trait_type": "Medium", "value": "35mm Film" }
    ],
    "category": "Photography"
  },
  {
    "id": "22",
    "name": "Pop Cartoon Portrait Art",
    "artist": "PopToon Art",
    "price": 0.28,
    "dateMinted": "2025-08-27",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBAMl2TD-LvANMGoO_gHfZwoJKVFZiLnPKg&s",
    "description": "A bold pop art style portrait of a classic cartoon icon.",
    "attributes": [
      { "trait_type": "Style", "value": "Pop Art" },
      { "trait_type": "Focus", "value": "Character Portrait" }
    ],
    "category": "Art"
  },
  {
    "id": "23",
    "name": "Retro 3D Cityscape",
    "artist": "NeoCity Builders",
    "price": 0.39,
    "dateMinted": "2025-08-27",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivVARfcVa9CV4VW6KezcjLdCicNpy7s4XWg&s",
    "description": "A stylized 3D city reminiscent of classic console graphics.",
    "attributes": [
      { "trait_type": "Style", "value": "Low-poly 3D" },
      { "trait_type": "Palette", "value": "Muted Neon" }
    ],
    "category": "3D"
  },
  {
    "id": "24",
    "name": "Analog Toon Film Still",
    "artist": "RetroFrame",
    "price": 0.21,
    "dateMinted": "2025-08-27",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWiRwC3RQVm5pLY4HOMNpal3rKD3ZpiIf6g&s",
    "description": "A grainy film still capturing a nostalgic cartoon moment.",
    "attributes": [
      { "trait_type": "Medium", "value": "Film Still" },
      { "trait_type": "Atmosphere", "value": "Nostalgic" }
    ],
    "category": "Photography"
  }
]


export  {NFTS}
