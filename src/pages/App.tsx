import { useState } from "react";
import { useMount, useUnmount, useUnmountRef } from "../components/custom";

import { Button, message } from "antd";

const Child = () => {
  const unmountRef = useUnmountRef();
  useMount(() => {
    console.log("首次渲染",unmountRef);
  });

  useUnmount(() => {
    console.log("组件已卸载",unmountRef);
  });

  return <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>;
};

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换 {flag ? "unmount" : "mount"}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
