const API_KEY = 'b0a8bb62-4706-4f0e-ab3d-e655b746fe69';
const BASE_URL = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;

const getCats = async () => {
  try{
    const data = await fetch(BASE_URL);
    const json = await data.json();


    return json[0].url;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg  = document.getElementsByTagName('img')[0];
	catImg.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
