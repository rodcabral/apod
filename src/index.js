import axios from "axios";
import { KEY } from "../config.js";

const titleHtml = document.querySelector('.title');
const dateHtml = document.querySelector('.date');
const pictureOfTheDay = document.querySelector('.picture-of-day');
const explanationHtml = document.querySelector('.explanation');
const copyrightNameHtml = document.querySelector('.copyright-name');
const pictureLink = document.querySelector('.picture-link');

async function getPictureOfDay() {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`);
    const { copyright, hdurl, date, title, explanation } = await response.data;

    titleHtml.innerText = title;
    pictureOfTheDay.src = hdurl;
    explanationHtml.innerText = explanation;
    dateHtml.innerText = date;
    copyrightNameHtml.innerText = copyright || "nasa";

    pictureLink.href = hdurl
}

getPictureOfDay();