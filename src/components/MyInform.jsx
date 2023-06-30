import React from 'react';
import { styled } from 'styled-components';

function MyInform() {
  return (
    <>
      <StContainer>
        <StinFormBox>회원정보 아이디: 비번:</StinFormBox>
        <Stimg> </Stimg>
      </StContainer>
    </>
  );
}

export default MyInform;

const StinFormBox = styled.div`
  text-align: left;
  width: 573px;
  height: 230px;
  background-color: #ffffff;
  margin: 15px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
`;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f7;
`;

const Stimg = styled.div`
  text-align: left;
  width: 220px;
  height: 230px;
  background-color: #ffffff;
  margin: 15px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 50%;
`;
