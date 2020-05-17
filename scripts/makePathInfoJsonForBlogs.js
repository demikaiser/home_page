var fs = require('fs');

// Initialize the json.
let json = {
  data: [
    // The following is a sample format.
    // {
    //   title: "",
    //   subtitle: "",
    //   description: "",
    //   thumbnailPath: "",
    //   indexPath: ""
    // }
  ]
}

// Fill in the information and update the target file.
fs.readdir("./achievements/blogs", (err, items) => {
  for (let i=0; i < items.length; i++) {

    let infoJson = JSON.parse(fs.readFileSync("./achievements/blogs/" + items[i] + "/information.json"));

    json.data.push({
      title: infoJson.title,
      subtitle: infoJson.subtitle,
      description: infoJson.description,
      thumbnailPath: "./achievements/blogs/" + items[i] + "/thumbnail.jpg",
      indexPath: "./achievements/blogs/" + items[i] + "/index.html"
    });
  }

  // Reverse the array for showing the most recent ones first.
  json.data = json.data.reverse();

  // Write to the file.
  fs.writeFileSync('./temporary/blogsInfo.json', JSON.stringify(json));
});



