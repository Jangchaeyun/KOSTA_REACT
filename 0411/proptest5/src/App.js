import "./App.css";
import DefaultPropCom from "./DefaultPropCom";
import PropsNode from "./PropsNode";
import SubComponent from "./SubComponent";

function App() {
  return (
    <div>
      <h1>Start React!!</h1>
      <p>CSS 적용</p>
      {/* 다양한 props, props type 명시적 지정 */}
      {/* <SubComponent
        src="react"
        num={20}
        boolean={1 == 1}
        obj={{ react: "리액트", exam: 100 }}
        arr={[10, 20, 30]}
        func={console.log("I am Function")}
      /> */}

      {/* props의 기본값, 필수 입력지정 */}
      {/* <DefaultPropCom str="리액트" /> */}

      {/* props로 노드 전달 */}
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
