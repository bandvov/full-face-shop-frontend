import FirstHeaderRow from "./FirstHeaderRow";
import SecondHeaderRow from "./SecondHeaderRow";
import ThirdHeaderRow from "./ThirdHeaderRow";

export default function Header() {
  return (
    <div class="border border-black">
      <FirstHeaderRow />
      <SecondHeaderRow />
      <ThirdHeaderRow />
    </div>
  );
}
