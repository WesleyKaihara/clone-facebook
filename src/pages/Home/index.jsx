import "./styles.css";
import { LeftMenu } from "../../components/Left_menu";
import { RightMenu } from "../../components/Right_menu";
import { Main } from "../../components/Main";
function Home() {
  return (
    <div className="home">
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default Home;
