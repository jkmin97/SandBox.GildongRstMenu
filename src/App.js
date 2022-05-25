import "./styles.css";

const SaramTitle = () => {
  return (
    <>
      <h1>길동 반점 메뉴 목록</h1>
      <h2>길동 반점 여름 특별식</h2>
    </>
  );
};

const Menu = (props) => {
  return (
    <h3>
      {props.yulim} : {props.item}
    </h3>
  );
};

const menuItems = ["짜장면", "짬뽕", "팔보채", "마파두부", "탕수육"];
menuItems.yulim = function () {
  return <h1>나는 유림 {menuItems.junho}</h1>;
};
menuItems.junho = <h3>난 준호</h3>;

export default function App() {
  return (
    <div className="App">
      <SaramTitle />
      {menuItems.map(function (item) {
        return <Menu yulim="여름 특별식" item={item} />;
      })}
    </div>
  );
}
