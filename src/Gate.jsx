import "./Gate.css";
import imageKey from "./assets/key.png";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { statusRoute } from "./ProtectedRoute";

function Gate() {
  const nav = useNavigate();
  async function enter() {
    statusRoute.isOpen = await bcrypt.compare(
      document.getElementById("key").value,
      "$2b$10$yzzH8tT98yT6.1hS3eChe.ei4Ar/gVdEFuNHaZcp8TeiW3hglnGHO"
    )
    nav("/content");
  }
  return (
    <div className="Gate">
      <img src={imageKey} />
      <p>Abandon yer fearrr an' enter the after life</p>
      <div className="user-input">
        <div>
          <input id="key" type="text" placeholder="KEY" />
        </div>
        <div>
          <input
            onClick={enter}
            className="enter-button"
            type="button"
            value="ENTER"
          />
        </div>
      </div>
    </div>
  );
}

export default Gate;
