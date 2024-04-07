export const getDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    let url = jsonData.message;
    let dogImg = document.querySelector(".imgDog");
    dogImg.setAttribute("src", url);
       
  };