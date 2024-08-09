import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/colors";

const KeyboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 12.688rem;
  height: 11.5rem;
  margin: 0 auto;
  gap: 0.06rem;
  background-color: ${colors.white};
  padding: 0.625rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
`;

const Key = styled.button`
  width: 3.75rem;
  height: 2.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: ${colors.secondaryBorderColor};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${colors.white};
`;

const SpecialKey = styled(Key)`
  background-color: ${colors.specialBlue};
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
