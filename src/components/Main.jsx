import React from 'react';
import { styled } from 'styled-components';
function Main() {
  return (
    <StList>
      <StBox>
        <StTitle> 하루일과 기록 </StTitle>
        <StDetail>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
          labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
          adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
          veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
          tempora!
        </StDetail>
      </StBox>
      <StBox>
        <StTitle> 하루일과 기록 </StTitle>
        <StDetail>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
          labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
          adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
          veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
          tempora!
        </StDetail>
      </StBox>
      <StBox>
        <StTitle> 하루일과 기록 </StTitle>
        <StDetail>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae aliquam asperiores
          labore, ratione recusandae enim odio veritatis explicabo vero quos magni alias animi
          adipisci dolore illo similique, aut tempora!Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ipsam quae aliquam asperiores labore, ratione recusandae enim odio
          veritatis explicabo vero quos magni alias animi adipisci dolore illo similique, aut
          tempora!
        </StDetail>
      </StBox>
    </StList>
  );
}

export default Main;
const StList = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
`;

const StBox = styled.div`
  text-align: left;
  width: 573px;
  height: 230px;
  background-color: #ffffff;
  margin: 15px;
  padding: 20px;
  border-radius: 20px;
  /* box-shadow: 3px 3px 3px 3px #e8e8f8; */
`;
const StTitle = styled.div`
  font-weight: bolder;
  font-size: 24px;
`;

const StDetail = styled.p`
  font-weight: bolder;
  font-size: 14px;
`;
