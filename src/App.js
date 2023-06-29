import React from 'react';
import Router from './shared/Router';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  // const [list, setList] = useState([]);

  // const updatePostList = async () => {
  //   const postList = await getPostList();

  //   setList(postList);
  // };

  // useEffect(() => {
  //   updatePostList();
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Router />

      {/* {list.map(item => {
        const { title, detail } = item.data();

        return (
          <div key={title}>
            <p>{title}</p>
            <p>{detail}</p>
          </div>
        );
      })} */}
    </>
  );
}

export default App;
