// 국룰: 어떤 항목을 감싸며 모서리가 둥글둥글하고 그림자가 있는 박스들을 보통 Card라고 부른다.
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // 한 태그에 여러 클래스 적용시 공백으로 구분
  return <div className={classes}>{props.children}
  </div>;
  // props.children: 예약어, 현재 컴포넌트(여기선 Card)로 감싸져 있는 내용물을 나타냄. 즉, 자식 컴포넌트 소환
  // => 의미 없는 <div>로 감싸는 대신 Card라는 custom component로 감싸서 css 속성 중복 방지, 효과적인 적용
  // props.className: HTML tag들이 쓰던 className을 내가 만든 컴포넌트로 그대로 가져옴
}

export default Card;
