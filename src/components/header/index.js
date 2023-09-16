import FirstHeaderRow from "./HeaderFirstRow";
import SecondHeaderRow from "./SecondHeaderRow";
import ThirdHeaderRow from "./ThirdHeaderRow";
import './styles.css'

export default function Header() {
  return (
    <div className="border border-black">
      <FirstHeaderRow />
      <SecondHeaderRow />
      <ThirdHeaderRow />
    </div>
  );
}
