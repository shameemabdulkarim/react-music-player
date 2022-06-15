import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Pick Up",
      artist: "Moods, Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4b9345777ac06217801ed6b44c66800829e122c3-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10000",
      color: ["#c1dfa3", "#c2677a"],
    },
    {
      name: "Blessed",
      artist: "Moods, Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
      color: ["#a8def9", "#fbf5bd"],
    },
    {
      name: "Tropical Midnight",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/02/7c943e75ba2e1017052e03444366c79445b43195-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=31516",
      color: ["#0d3f26", "#9db0c0"],
    },
    {
      name: "Ending",
      artist: "sadtoi, Relyae",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28969",
      color: ["#5a4c7e", "#83a493"],
    },
    {
      name: "la zona",
      artist: "Maydee",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
      color: ["#bac9dc", "#82745a"],
    },
  ];
}

export default chillHop;
