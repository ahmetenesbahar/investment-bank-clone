import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import styled from "styled-components";

const KeyboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 184px;
  margin: 0 auto;
  gap: 1px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const Key = styled.button`
  width: 60px;
  height: 40px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #adb5bd;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

const SpecialKey = styled(Key)`
  background-color: #49a5e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {
  const [keys, setKeys] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

  const [toggleShuffle, setToggleShuffle] = useState(false);

  const handleBackspace = () => {
    onKeyPress("backspace");
  };

  const shuffleKeys = () => {
    if (toggleShuffle) {
      const shuffledKeys = keys.sort(() => Math.random() - 0.5);
      setKeys(shuffledKeys);
    }
  };

  const handleShuffle = () => {
    if (toggleShuffle) {
      setKeys(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
      setToggleShuffle(false);
    } else {
      setToggleShuffle(true);
      shuffleKeys();
    }
  };

  return (
    <KeyboardContainer>
      {keys.slice(1, 10).map((key) => (
        <Key
          key={key}
          onClick={() => {
            onKeyPress(key);
            shuffleKeys();
          }}
        >
          {key}
        </Key>
      ))}
      <SpecialKey onClick={handleShuffle}>
        <img src="/assets/numpad_random.png" alt="shuffle" />
      </SpecialKey>
      {keys.slice(0, 1).map((key) => (
        <Key
          key={key}
          onClick={() => {
            onKeyPress(key);
            shuffleKeys();
          }}
        >
          {key}
        </Key>
      ))}
      <SpecialKey onClick={handleBackspace}>
        <img src="/assets/numpad_delete.png" alt="delete" />
      </SpecialKey>
    </KeyboardContainer>
  );
};

export default Keyboard;
