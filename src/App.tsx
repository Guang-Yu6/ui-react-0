import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Default}>默认值</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hl 基本的</Button>
        <Button btnType={ButtonType.Danger}  size={ButtonSize.Small}>Danger 警告！</Button>
        <Button disabled>禁用</Button>
        <Button >hello</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled>百度链接</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' target='_blank'>百度链接</Button>
      </header>
    </div>
  );
}

export default App;
