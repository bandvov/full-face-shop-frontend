import FirstHeaderRow from "./FirstHeaderRow";
import SecondHeaderRow from "./SecondHeaderRow";
import ThirdHeaderRow from "./ThirdHeaderRow";
import './styles.css'

export default function Header() {
  return (
    <div>
      <FirstHeaderRow />
      <SecondHeaderRow />
      <ThirdHeaderRow />
    </div>
  );
}
