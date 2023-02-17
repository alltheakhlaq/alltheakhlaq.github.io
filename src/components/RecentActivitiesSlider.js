// Stolen from https://dev.to/rakumairu/simple-react-carousel-24m0

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { BACKGROUND } from "../assets/css/color";

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */
  ::-webkit-scrollbar,
  ::-webkit-scrollbar {
    display: none;
  }
  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;
const arrow = css`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
`;
const LeftArrow = styled.button`
  ${arrow}
  left: 24px;
`;
const RightArrow = styled.button`
  ${arrow}
  right: 24px;
`;

const RecentActivitiesSlider = props => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <SliderContainer>
      <SliderWrapper>
        <LeftArrow
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex(prevState => prevState - 1);
            }
          }}
        >
          &lt;
        </LeftArrow>
        <ContentWrapper>
          <Content style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {children.map(child => (
              <div>
                <div style={{ padding: "0 120px" }}>{child}</div>
              </div>
            ))}
          </Content>
        </ContentWrapper>
        <RightArrow
          onClick={() => {
            if (currentIndex < length - 1) {
              setCurrentIndex(prevState => prevState + 1);
            }
          }}
        >
          &gt;
        </RightArrow>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default styled(RecentActivitiesSlider)`
  background-color: ${BACKGROUND};
`;
