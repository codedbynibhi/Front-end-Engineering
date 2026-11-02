import React, { useState } from "react";
function CounterButton(props) {
  const { label, onClick, className } = props;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}


export default function Counter() {
  const [count, setCount] = useState(0);
  const [bounce, setBounce] = useState(false);

  function triggerBounce() {
    setBounce(true);
    setTimeout(() => setBounce(false), 150);
  }

  function increase() {
    setCount(count + 1);
    triggerBounce();
  }

  function decrease() {
    setCount(count - 1);
    triggerBounce();
  }

  function reset() {
    setCount(0);
    triggerBounce();
  }

  
  let subText = "Start clicking below";
  if (count > 0) subText = "Counting up";
  if (count < 0) subText = "Counting down";

  return (
    <div className="page">
      <div className="counter-card">
        <div className="label">Counter</div>
        <div className={`count ${bounce ? "bounce" : ""}`}>{count}</div>
        <div className="sub">{subText}</div>

        <div className="buttons">
          <CounterButton label="−" onClick={decrease} className="decrease" />
          <CounterButton label="+" onClick={increase} className="increase" />
        </div>

        <CounterButton label="Reset" onClick={reset} className="reset" />
      </div>

      <style>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #12261F;
          font-family: 'Inter', sans-serif;
        }

        .counter-card {
          background-color: #16302A;
          border: 1px solid #244037;
          border-radius: 18px;
          padding: 48px 56px;
          width: 340px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
        }

        .label {
          color: #E8A33D;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .count {
          font-family: Georgia, serif;
          font-weight: 900;
          font-size: 96px;
          color: #F4EDE4;
          margin: 10px 0 6px;
          transition: transform 0.15s ease;
        }

        .bounce {
          transform: scale(1.15);
        }

        .sub {
          color: #7FA396;
          font-size: 14px;
          margin-bottom: 34px;
        }

        .buttons {
          display: flex;
          gap: 12px;
        }

        button {
          flex: 1;
          padding: 14px 0;
          font-size: 20px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: transform 0.1s ease, background-color 0.15s ease;
        }

        button:active {
          transform: scale(0.94);
        }

        .decrease {
          background: #1E3A31;
          color: #F4EDE4;
          border: 1px solid #2E5347;
        }

        .decrease:hover {
          background-color: #26483C;
        }

        .increase {
          background-color: #E8A33D;
          color: #16302A;
        }

        .increase:hover {
          background-color: #f0b358;
        }

        .reset {
          margin-top: 14px;
          width: 100%;
          background: none;
          color: #7FA396;
          border: none;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px 0;
        }

        .reset:hover {
          color: #F4EDE4;
        }
      `}</style>
    </div>
  );
}