import Cinemaddict from "./presenter/Cinemaddict";

const EntryNodes = {
  BODY: document.body,
  HEADER: document.body.querySelector(`.header`),
  MAIN: document.body.querySelector(`.main`),
  FOOTER: document.body.querySelector(`.footer__statistics`),
};

const cinemaddict = new Cinemaddict(EntryNodes);
cinemaddict.init();
