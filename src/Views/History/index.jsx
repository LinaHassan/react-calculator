import "./History.css";
import { useContext } from "react";
import { historyContext } from "../../context";
const History = () => {
  const { history, setEditValue, setHistory } = useContext(historyContext);
  const editHisyory = (event) => {
    const index = history.findIndex(
      (item) => item.equation + "=" + item.answer === event.target.textContent
    );

    const value = history.slice(0, index + 1);
    setHistory(value);

    setEditValue(event.target.textContent.split("=")[1]);
  };
  return (
    <main>
      <div className="History-body">
        {history?.map((ele) => (
          <div>
            <p onClick={editHisyory} key={ele.answer}>
              {ele.equation}={ele.answer}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default History;
