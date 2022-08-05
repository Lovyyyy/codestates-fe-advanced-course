import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { BsMoon, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface ToggleInterface {
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const ToggleContainer = styled.div`
  position: absolute;
  margin-top: 10px;
  left: 95%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: grey;
    transition: all 0.2s ease;
    color: yellow;
    &.toggle--checked {
      /* background-color: #4000c7; */
      transition: all 0.5s ease-in-out;
    }
    div {
      display: flex;
      color: ${(props) => props.theme.toggleColor};
      justify-content: space-around;
      height: 24px;
      align-items: center;
      font-size: 1rem;
    }
  }

  > .circle {
    position: absolute;
    top: 1.5px;
    left: 1.5px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.textColor};
    transition: all 0.25s ease-in-out;

    &.checked {
      left: 27px;
    }
  }
`;

export const Toggle = ({ setTheme }: ToggleInterface) => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <>
      <ToggleContainer
        onClick={() => {
          toggleHandler();
          setTheme((boolean) => !boolean);
        }}
      >
        <div className={`toggle-container ${isOn ? "checked" : ""}`}>
          <div>
            <BsFillMoonFill />
            <BsFillSunFill />
          </div>
        </div>
        <div className={`circle ${isOn ? "checked" : ""}`}></div>
        {isOn ? <span></span> : <span></span>}
      </ToggleContainer>
    </>
  );
};
