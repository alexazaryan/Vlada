import React, { useState, useEffect } from "react";

export default function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Изменяем цвет фона body при изменении состояния переключателя
    document.body.style.backgroundColor = isChecked ? "#FFB6C1" : "";
  }, [isChecked]);

  return (
    <div className="q-container">
      <div className="main">
        <input
          type="checkbox"
          id="hidcheck"
          checked={isChecked}
          onChange={() => setIsChecked((prevState) => !prevState)}
          hidden
        />
        <label className="capsule" htmlFor="hidcheck">
          <div className="circle"></div>
          <div className="text-signs">
            <span id="on">{isChecked ? "on" : "off"}</span>
          </div>
        </label>
      </div>
    </div>
  );
}
