import React, { useState } from "react";
import styles from "./Header.module.css";
import Webcam from "react-webcam";
import {
    BsFillCameraVideoFill,
    BsFillCameraVideoOffFill,
} from "react-icons/bs";
import Draggable from "react-draggable";

const Header = () => {
    const [camera, setCamera] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <button
                    className={styles.button}
                    onClick={() => setCamera(!camera)}
                >
                    {camera ? (
                        <BsFillCameraVideoOffFill fill="#fff" size={23} />
                    ) : (
                        <BsFillCameraVideoFill fill="#fff" size={23} />
                    )}
                </button>
            </header>

            {camera ? (
                <Draggable>
                    <Webcam
                        className={styles.camera}
                        audio={false}
                        width={300}
                        height={300}
                        videoConstraints={{
                            height: 300,
                            width: 300,
                            facingMode: "user",
                        }}
                    />
                </Draggable>
            ) : null}
        </>
    );
};

export default Header;
