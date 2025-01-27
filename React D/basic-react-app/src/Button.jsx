function handleClick() {
  console.log("Hello!");
}

function handleMouseOver() {
  console.log("bye!");
}
function handledDblClick() {
  console.log("bye!");
}

export default function button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        this parah Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Excepturi adipisci, iste impedit tenetur nisi expedita cupiditate,
        inventore assumenda veritatis autem iusto aspernatur ullam nulla totam
        blanditiis? Magni voluptate odio quisquam.is for event demo
      </p>
      <button onDoubleClick={handledDblClick}>double click me!</button>
    </div>
  );
}
