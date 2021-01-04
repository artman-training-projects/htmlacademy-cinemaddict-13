import Cinemaddict from "./presenter/Cinemaddict";

const EntryNodes = {
  body: document.body,
  header: document.body.querySelector(`.header`),
  main: document.body.querySelector(`.main`),
  footer: document.body.querySelector(`.footer__statistics`),
};

const cinemaddict = new Cinemaddict(EntryNodes);
cinemaddict.init();
