// let apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'

// export async function getArtwork() {
//   fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/3")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       //     let img = document.createElement('img');
//       // img.setAttribute("src", json.primaryImageSmall);
//       // document.body.append(img);
//     });
// }
// export async function getNasa() {
//   fetch(
//     "https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=QUo8ejaalVts7pdKmtLEa2WxCwNEHl3u0LkesSwM"
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       let img = document.createElement("p");
//       img.innerHTML = json;
//         // img.setAttribute("src", json[0]);
//       document.body.append(img);
//     });
// // }
// export async function getCats() {
//   fetch("https://api.thecatapi.com/v1/images/search")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json[0]);
//     //   let imgCat = document.getElementById("imgCat");
//     //   imgCat.setAttribute("src", json[0].url);
//     //   document.body.append(img)
//     }//);
// );
export const getCat = async () => {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    const jsonData = await response.json();
    // console.log(jsonData);
    let catImg = document.querySelector(".imgCat");
    catImg.setAttribute("src", jsonData[0].url);
    console.log(jsonData[0].url);
  };
