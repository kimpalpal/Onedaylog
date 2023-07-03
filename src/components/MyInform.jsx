import React, { useState } from 'react';
import { styled } from 'styled-components';
import { auth, storage } from '../server/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { StBtn } from './Header';

function MyInform() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState('');
  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
  };

  const imgUpload = async () => {
    if (selectedFile) {
      const imageRef = ref(storage, `${auth.currentUser.uid}/${selectedFile.name}`);
      await uploadBytes(imageRef, selectedFile);

      const downloadURL = await getDownloadURL(imageRef);
      setFile(downloadURL);
    } else {
      alert('파일을 올려주세요');
    }
  };

  return (
    <>
      <StContainer>
        <StinFormBox>
          회원정보
          <div>UID: {auth.currentUser.uid}</div>
          <div>아이디: {auth.currentUser.email}</div>
          <div>마지막 들어온날: {auth.currentUser.metadata.lastSignInTime}</div>
          <input type="file" onChange={handleFileSelect} />
          <StBtn onClick={imgUpload}>Upload</StBtn>
        </StinFormBox>
        <Stimg src={file} />
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

const Stimg = styled.img`
  text-align: left;
  width: 220px;
  height: 230px;
  background-color: #ffffff;
  margin: 15px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 50%;
`;
