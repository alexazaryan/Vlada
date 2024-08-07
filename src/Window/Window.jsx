// import React, { useState } from "react";

// export default function Window() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Логика отправки данных
//     closeModal();
//   };

//   return (
//     <div className="bloc__window">
//       <div className="center__btn" onClick={openModal}>
//         Замовити
//       </div>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal__content">
//             <h2 className="title__h2">Оформити замовлення</h2>
//             <p>
//               Для того що оформити замовлення напишить свій номер телефону та
//               протягом 30 хв ми вам зателефонуємо
//             </p>
//             <form className="modal__form" onSubmit={handleSubmit}>
//               <input
//                 className="modal__input"
//                 type="tel"
//                 placeholder="Введите ваш телефон"
//                 required
//               />
//               <button onClick={closeModal} type="submit">
//                 Отправить
//               </button>
//             </form>
//             {/* <div onClick={closeModal}>Закрыть </div> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Window() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false); // Сброс состояния при повторном открытии окна
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных
    setIsSubmitted(true); // Флаг, что форма отправлена
  };

  return (
    <div className="bloc__window">
      <div className="center__btn" onClick={openModal}>
        Замовити
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className={`modal__content ${isSubmitted ? "submitted" : ""}`}>
            {isSubmitted ? (
              <>
                <h2 className="title__h2">Спасибо за заказ</h2>
                <p className="title__window__p">
                  Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее
                  время!
                </p>
                <button onClick={closeModal} className="close__btn">
                  Закрыть
                </button>
              </>
            ) : (
              <>
                <h2 className="title__h2">Оформити замовлення</h2>
                <p className="title__window__p">
                  Для того що оформити замовлення напишить свій номер телефону
                  та протягом 30 хв ми вам зателефонуємо
                </p>
                <form className="modal__form" onSubmit={handleSubmit}>
                  <input
                    className="modal__input"
                    type="tel"
                    placeholder="Введите ваш телефон"
                    required
                  />
                  <button type="submit">Отправить</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
