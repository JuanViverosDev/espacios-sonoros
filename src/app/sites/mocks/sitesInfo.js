import ermita1 from "./assets/img/ermita/1.jpg";
import ermita2 from "./assets/img/ermita/2.jpg";
import ermita3 from "./assets/img/ermita/3.jpg";
import ermita4 from "./assets/img/ermita/4.jpg";
import ermita5 from "./assets/img/ermita/5.jpg";

import jairo1 from "./assets/img/jairovarela/1.jpg";
import jairo2 from "./assets/img/jairovarela/2.jpg";
import jairo3 from "./assets/img/jairovarela/3.jpg";
import jairo4 from "./assets/img/jairovarela/4.jpg";

import pance1 from "./assets/img/pance/1.jpg";
import pance2 from "./assets/img/pance/2.jpg";
import pance3 from "./assets/img/pance/3.jpg";
import pance4 from "./assets/img/pance/4.jpg";
import pance5 from "./assets/img/pance/5.jpg";

import parque1 from "./assets/img/parquedelperro/1.jpg";
import parque2 from "./assets/img/parquedelperro/2.jpg";
import parque3 from "./assets/img/parquedelperro/3.jpg";
import parque4 from "./assets/img/parquedelperro/4.jpg";
import parque5 from "./assets/img/parquedelperro/5.jpg";

import sanantonio1 from "./assets/img/sanantonio/1.jpg";
import sanantonio2 from "./assets/img/sanantonio/2.jpg";
import sanantonio3 from "./assets/img/sanantonio/3.jpg";
import sanantonio4 from "./assets/img/sanantonio/4.jpg";

import panceAudio from "./assets/sounds/pance.aac";
import jairovarelaAudio from "./assets/sounds/jairovarela.mp3";
import sanAntonioAudio from "./assets/sounds/sanantonio.mp3";
import ermitaAudio from "./assets/sounds/ermita espacio sonoro.mp3";
import parqueAudio from "./assets/sounds/parque-del-perro.mp3";

export const sites = [
  {
    id: 1,
    name: "Parque del perro",
    description:
      "Área boscosa pequeña con restaurantes, bares y una emblemática escultura de perro que se ilumina en la noche.",
    lat: 3.4358476,
    lng: -76.5477402,
    url: "parque-del-perro",
    images: [
      {
        id: 1,
        url: parque1,
        alt: "Parque del perro 1",
      },
      {
        id: 2,
        url: parque2,
        alt: "Parque del perro 2",
      },
      {
        id: 3,
        url: parque3,
        alt: "Parque del perro 3",
      },
      {
        id: 4,
        url: parque4,
        alt: "Parque del perro 4",
      },
      {
        id: 5,
        url: parque5,
        alt: "Parque del perro 5",
      },
    ],
    audio: parqueAudio,
  },
  {
    id: 2,
    name: "Pance",
    description:
      "Pance es un corregimiento en el sur del municipio colombiano de Cali, su área se extiende desde el Valle del río Cauca hasta el parque nacional natural los Farallones de Cali.",
    lat: 3.3492978,
    lng: -76.5736431,
    url: "pance",
    images: [
      {
        id: 1,
        url: pance1,
        alt: "Pance 1",
      },
      {
        id: 2,
        url: pance2,
        alt: "Pance 2",
      },
      {
        id: 3,
        url: pance3,
        alt: "Pance 3",
      },
      {
        id: 4,
        url: pance4,
        alt: "Pance 4",
      },
      {
        id: 5,
        url: pance5,
        alt: "Pance 5",
      },
    ],
    audio: panceAudio,
  },
  {
    id: 3,
    name: "Plazoleta Jairo Varela",
    description:
      "La Plazoleta Jairo Varela está situada en el centro histórico de Cali, cerca de la iglesia de San Francisco y la iglesia de La Merced. Es un lugar de reunión popular tanto para los lugareños como para los turistas, y se utiliza a menudo como sede de eventos culturales y conciertos.",
    lat: 3.4550312,
    lng: -76.5370291,
    url: "plazoleta-jairo-varela",
    images: [
      {
        id: 1,
        url: jairo1,
        alt: "Plazoleta Jairo Varela 1",
      },
      {
        id: 2,
        url: jairo2,
        alt: "Plazoleta Jairo Varela 2",
      },
      {
        id: 3,
        url: jairo3,
        alt: "Plazoleta Jairo Varela 3",
      },
      {
        id: 4,
        url: jairo4,
        alt: "Plazoleta Jairo Varela 4",
      },
    ],
    audio: jairovarelaAudio,
  },
  {
    id: 4,
    name: "La Ermita",
    description:
      "Ermita es un barrio ubicado en la ciudad de Cali, Colombia. Es conocido por sus coloridas casas coloniales y su ambiente bohemio y artístico. El barrio cuenta con numerosos restaurantes, bares y galerías de arte, y es un destino popular para los turistas y los lugareños que buscan una experiencia cultural única.",
    lat: 3.4546141,
    lng: -76.5349964,
    url: "la-ermita",
    images: [
      {
        id: 1,
        url: ermita4,
        alt: "La Ermita 1",
      },
      {
        id: 2,
        url: ermita2,
        alt: "La Ermita 2",
      },
      {
        id: 3,
        url: ermita3,
        alt: "La Ermita 3",
      },
      {
        id: 4,
        url: ermita4,
        alt: "La Ermita 4",
      },
    ],
    audio: ermitaAudio,
  },
  {
    id: 5,
    name: "San Antonio",
    description:
      "San Antonio es un conocido barrio del occidente de la ciudad colombiana de Cali. San Antonio es famoso y reconocido como un barrio tradicional, por su arquitectura colonial y su historia.",
    lat: 3.4477814,
    lng: -76.5425425,
    url: "san-antonio",
    images: [
      {
        id: 1,
        url: sanantonio1,
        alt: "San Antonio 1",
      },
      {
        id: 2,
        url: sanantonio2,
        alt: "San Antonio 2",
      },
      {
        id: 3,
        url: sanantonio3,
        alt: "San Antonio 3",
      },
      {
        id: 4,
        url: sanantonio4,
        alt: "San Antonio 4",
      },
    ],
    audio: sanAntonioAudio,
  },
];
