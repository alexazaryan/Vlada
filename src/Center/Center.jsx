import Window from "../Window/Window";

export default function Center() {
  return (
    <div className="center">
      <div>
        <div className="center__wrap">
          <div className="center__wrap__text">
            <p className="center__wrap__te">
              Солодощі, приготовані з любов'ю та увагою до деталей
            </p>
            <p className="center__wrap__ts">
              При замовленні капкейків від 12 штук отримайте знижку 10%
            </p>
          </div>

          <div className="center__wrap__img">
            <div className="center__cake">
              <img
                className="center__cake__img"
                src="./img/cake.png"
                alt="cake"
              />
            </div>

            <div className="center__fame">
              <img
                className="center__fame__img"
                src="./img/frame.png"
                alt="fame"
              />
            </div>
          </div>
        </div>
        {/* <div className="center__btn">Замовити</div> */}
        <Window />

        {/* ========================= */}
        <ul className="text__title">
          <li className="text__title__li">Наші вироби</li>
          <li className="text__title__description">
            Щоб подивитися детальныше про торт натисніть на “Хочу”
          </li>
        </ul>

        <div className="box__wrap__signs">
          {/*  */}
          <div className="box__img">
            <div className="box__wrap__img">
              <img
                className="box__wrap__img__s"
                src="./img/cake1.png"
                alt="#"
              />
            </div>
            <div className="box__img__btn">Хочу</div>
          </div>
          {/*  */}
          <div className="box__img">
            <div className="box__wrap__img">
              <img
                className="box__wrap__img__s"
                src="./img/cake2.png"
                alt="#"
              />
            </div>
            <div className="box__img__btn">Хочу</div>
          </div>
          {/*  */}
          <div className="box__img">
            <div className="box__wrap__img">
              <img
                className="box__wrap__img__s"
                src="./img/cake3.png"
                alt="#"
              />
            </div>
            <div className="box__img__btn">Хочу</div>
          </div>
          {/*  */}
          <div className="box__img">
            <div className="box__wrap__img">
              <img
                className="box__wrap__img__s"
                src="./img/cake4.png"
                alt="#"
              />
            </div>
            <div className="box__img__btn">Хочу</div>
          </div>
          {/*  */}
          <div className="box__img">
            <div className="box__wrap__img">
              <img
                className="box__wrap__img__s"
                src="./img/cake5.png"
                alt="#"
              />
            </div>
            <div className="box__img__btn">Хочу</div>
          </div>
          {/*  */}
          <div className="box__img">
            <div className="box__wrap__img">
              <img
                className="box__wrap__img__s"
                src="./img/cake6.png"
                alt="#"
              />
            </div>
            <div className="box__img__btn">Хочу</div>
          </div>
          {/*  */}
        </div>

        {/* =========================================== */}

        <div className="center__wrap__clr">
          {/*  */}

          <div className="box__img__s1">
            <div className="center__box__wrap__img">
              <img
                className="box__wrap__img__sdr"
                src="./img/cart11.png"
                alt="#"
              />
            </div>
            <p className="center__text__op">
              Зручна доставка: У нас можна замовити доставку свого торта або
              самовивіз
            </p>
          </div>

          {/*  */}

          <div className="box__img__s1 box__img__s1_color">
            <div className="center__box__wrap__img">
              <img
                className="box__wrap__img__sdr"
                src="./img/cake23.png"
                alt="#"
              />
            </div>
            <p className="center__text__op">
              Торти на замовлення: Можна вибрати форму торта, колір i смак
            </p>
          </div>

          {/*  */}

          <div className="box__img__s1 box__img__s1_bot">
            <div className="center__box__wrap__img">
              <img
                className="box__wrap__img__sdr"
                src="./img/cake24.png"
                alt="#"
              />
            </div>
            <p className="center__text__op">
              Дозволяємо: на День Народження ви можете замовити в нас окрему
              кімнату i ми вас привітаємо з Днем Народження
            </p>
          </div>

          {/*  */}

          <div className="box__img__s1 box__img__s1_color box__img__s1_bot">
            <div className="center__box__wrap__img">
              <img
                className="box__wrap__img__sdr"
                src="./img/cake28.png"
                alt="#"
              />
            </div>
            <p className="center__text__op">
              Даруємо подарунок: Даруємо подарунок якщо замовити торт i
              відзначити нас в інстаргамі
            </p>
          </div>

          {/*  */}
        </div>

        {/* =========================================== */}

        <div className="wrap__box__ellipse">
          <ul className="wrap__Wrap__text">
            <li className="title__text__ona">Про нас</li>
            <li className="title__text__description">
              Ми пропонуємо вам не просто смачні торти, а й можливість зробити
              їх унікальними, додавши напис чи малюнок. Ви можете вибрати або з
              готових дизайнів тортів або зробити свій індивідуальний торт.
            </li>
          </ul>

          <div className="box__wrap__ellipse__img">
            <div className="wrap__ellipse__kl">
              <img
                className="ellipse__img__v"
                src="./img/ellipse38.png"
                alt="#"
              />
            </div>

            <div className="wrap__ellipse__bn">
              <img
                className="ellipse__img__n"
                src="./img/ellipse39.png"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
