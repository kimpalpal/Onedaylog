import React, { useState, useEffect } from 'react';
import { getPostList } from '../server/post';
import { auth, db } from '../server/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import PostBox from './PostBox';

function MyList() {
  const userselect = useSelector(state => state.MainList);
  const emailID = `${auth.currentUser.email}`;
  console.log(emailID);
  const [list, setList] = useState([]);
  const updatePostList = async () => {
    const postList = await getPostList();

    setList(postList);
  };

  useEffect(() => {
    updatePostList();
  }, [userselect]);

  const deleteBtn = async id => {
    const idRef = doc(db, 'posts', id);
    await deleteDoc(idRef);
    setList(prev => prev.filter(item => item.id !== id));
  };

  const updateBtn = (id, newTitle, newDetail) => {
    const idRef = doc(db, 'posts', id);
    updateDoc(idRef, { title: newTitle, detail: newDetail });
    setList(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, title: newTitle, detail: newDetail };
        } else {
          return item;
        }
      });
    });
  };

  return list
    .filter(item => item.emailId === emailID)
    .map(item => {
      return <PostBox item={item} updateBtn={updateBtn} deleteBtn={deleteBtn} />;
    });
}

export default MyList;
