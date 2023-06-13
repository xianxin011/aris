import { useState, useEffect, useLayoutEffect, useDebugValue } from "react";

function useFriendStatus(friendID:any) {
    const [isOnline, setIsOnline] = useState(null);
  
    // ...
  
    // 在开发者工具中的这个 Hook 旁边显示标签  
    // e.g. "FriendStatus: Online"  
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
  }

const Index: React.FC<any> = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
    console.log(useFriendStatus(1));
    
  useEffect(() => {
    if(count === 0){
      setCount(10 + Math.random() * 100)
    }
  }, [count])

  useLayoutEffect(() => {
    if(count1 === 0){
      setCount1(10 + Math.random() * 100)
    }
  }, [count1])

  return (
    <>
      <div>大家好，我是小杜杜，一起玩转Hooks吧！</div>
      <div>useEffect的count:{count}</div>
      <div>useLayoutEffect的count:{count1}</div>
    </>
  );
};

export default Index;
