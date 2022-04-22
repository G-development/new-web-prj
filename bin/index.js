#!/usr/bin/env node

const args = require("args");
const path = require("path");
const library = require("../lib/lib.js");

// console.log(path);

args
  // .option("port", "The port on which the app will be running", 3000)
  // .option("reload", "Enable/disable livereloading")
  // .command("serve", "Serve your static site", ["s"])
  .option("name", "Project name")
  .option("bootstrap", "Use bootstrap (not active)");

const flags = args.parse(process.argv);
var newProject = { name: flags.name };

if (flags.port) {
  console.log(`I'll be running on port ${flags.port}`);
}

if (flags.bootstrap) {
  newProject.bootstrap = flags.bootstrap;
  console.log("newProject", newProject);
}

if (flags.name) {
  console.log("New project name:", flags.name);

  const dest_config = path.join(flags.name, "/config");
  const dest_src = path.join(flags.name, "/src");
  const dest_js = path.join(flags.name, "/src/javascript");
  const dest_sass = path.join(flags.name, "/src/sass");

  // Displays the text in the console
  library.createDir(flags.name);
  library.createDir(dest_config);
  library.createDir(dest_src);
  library.createDir(dest_js);
  library.createDir(dest_sass);

  const source_package = path.join(__dirname, "../template/package/");
  const source_config = path.join(__dirname, "../template/config/");
  const source_src = path.join(__dirname, "../template/src/");
  const source_js = path.join(__dirname, "../template/src/javascript/");
  const source_sass = path.join(__dirname, "../template/src/sass/");

  library.copyAllFile(source_package, flags.name);
  library.copyAllFile(source_config, dest_config);
  library.copyAllFile(source_js, dest_js);
  library.copyAllFile(source_sass, dest_sass);
}
