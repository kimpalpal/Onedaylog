import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { getPostList } from '../server/post';
import { useSelector } from 'react-redux';

function Main() {
  const userselect = useSelector(state => state.MainList);
  const [list, setList] = useState([]);
  const updatePostList = async () => {
    const postList = await getPostList();

    setList(postList);
  };
  useEffect(() => {
    updatePostList();
  }, [userselect]);

  return list.map(item => {
    return (
      <div key={item.uid}>
        <StList>
          <StBox style={{ position: 'relative' }}>
            <StTitle key={item.title}>{item.title}</StTitle>
            <StDetail>{item.detail}</StDetail>
          </StBox>
        </StList>
      </div>
    );
  });
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
`;
const StTitle = styled.div`
  font-weight: bolder;
  font-size: 24px;
`;

const StDetail = styled.p`
  font-weight: bolder;
  font-size: 14px;
`;

export const StDeleteBtn = styled.button`
  background-color: #ffffff;
  color: #ff5555;
  border-radius: 20px;
  border: 1px solid #ff5555;
  width: 70px;
  height: 33px;
  font-size: 12px;
  margin-right: 15px;
  position: ${props => props.custompostion};
  right: ${props => props.customright};
  &:hover {
    height: 30px;
    color: #ffffff;
    background-color: #ff5555;
    border: 1px solid #ff5555;
    box-shadow: 2px 2px 2px 2px #e8e8f8;
    cursor: pointer;
    font-weight: bolder;
  }
`;
