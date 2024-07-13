//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.onclick = ()=>{
    Promise.all(images).then((data)=>{
        data.forEach((url)=>{
            output.innerHTML+=`
                <img src='${url.url}'>
            `
        })
    }).catch((err)=>{
        console.log(`Failed to load image's URL: ${err.url}`);
    })
}