import React, { useState, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isShow, setIsShow] = useState(false)
  const ctx = useRef(null)
  let value = '通过使用 CSS 我们可以大大提升网页开发的工作效率！ 在我们的 CSS 教程中，您会学到如何使用 CSS 同时控制多重网页的样式和布局。本 CSS 教程包含了数百个CSS在线实例,通过本站的在线编辑器，你可以在线编辑CSS,并且可以在线查看修改后的效果。'
  return (
    <div className="App">
      <header className="App-header">
        <div ref={ctx}
          className="content"
          data-after={isShow ? '收起' : '展开'}
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? value : value.slice(0, 30) + ' '}
        </div>
      </header>
    </div>
  );
}

export default App;
