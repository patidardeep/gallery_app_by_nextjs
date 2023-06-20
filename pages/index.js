import Gallery from "@/components/Gallery";
import React, { useState } from "react";
const index = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <div>
          <div className="container mt-3 bg-light shadow p-3 mb-5 bg-white rounded">
        <div className="">
        <h1 className="text-center " style={{backgroundColor:"#B9E9FC",fontFamily:"montserrat" }}>Gallary App</h1></div>
            <button
                className="btn btn-dark mb-3"
                onClick={() => setIsShow(!isShow)}
            >
                {isShow ? "Hide" : "Show"}
            </button>
            {isShow && <Gallery />}
        </div>
        </div>
    );
};
export default index;