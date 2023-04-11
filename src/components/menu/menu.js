import "./menu.scss";
import createElementDP from "../../util/createElementDOMParser";

export default function createMenu() {
  const menu = createElementDP(
    `
      <main id="menu" class="menu">
        <div class="container">
          <div class="fancy-headline">
            <h2>
              OUR DELICIOUS MENU 
            </h2>
          </div>
          <div class="menu-items">
            <div class="menu-items__item card">
              <div class="card__title">
                BACKERY
              </div>
              <h3 class="card__headline">
                taste the most powerful backer ever
              </h3>
              <p class="card__paragraph">
                we have the most delusions  bakery in the world, come and get a free croissant
              </p>
              <button class="btn card__btn btn--tilted">
                order now
              </button>
            </div>

            <div class="menu-items__item card">
              <div class="card__title">
                BACKERY
              </div>
              <h3 class="card__headline">
                taste the most powerful backer ever
              </h3>
              <p class="card__paragraph">
                we have the most delusions  bakery in the world, come and get a free croissant
              </p>
              <button class="btn card__btn btn--tilted">
                order now
              </button>
            </div>

            <div class="menu-items__item card">
              <div class="card__title">
                BACKERY
              </div>
              <h3 class="card__headline">
                taste the most powerful backer ever
              </h3>
              <p class="card__paragraph">
                we have the most delusions  bakery in the world, come and get a free croissant
              </p>
              <button class="btn card__btn btn--tilted">
                order now
              </button>
            </div>
          </div>
        </div>
      </main>
    `
  );

  return menu;
}
