const path = require("path");
const Watchpack = require("watchpack");

const wp = new Watchpack({ followSymlinks: true });

wp.watch({
  files: [path.join(__dirname, "symlinks/file")],
  directories: [path.join(__dirname, "symlinks/directory")],
});

wp.on("change", (p) => {
  console.log(`changed ${p}`);
});
