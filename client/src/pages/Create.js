import { useEffect } from "react";
import "../styles/Create.css";

function Create() {
  useEffect(() => {
    window.location.href = "https://metapatch.com/patch";
  }, []);

  return (
    <div className="moog-img-div-create">
      <div className="create-div">
        <div className="content-load">
          <h1 className="text-shadows">Loading...</h1>
        </div>
      </div>
    </div>
  );
}

export default Create;
