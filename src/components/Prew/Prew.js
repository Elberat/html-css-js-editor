import React, { useContext, useMemo } from "react";
import { EditorContext } from "../../context/context";
import styles from "./Prew.module.css";

const Prew = () => {
    const { html, css, js } = useContext(EditorContext);

    const document = useMemo(() => {
        if (!html && !css && !js) return;
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            </script>
        </body>
        </html>
        `;
    }, [html, css, js]);

    return (
        <div className={styles.content}>
            {document ? (
                <iframe
                    title="prew"
                    className={styles.prew}
                    srcDoc={document}
                />
            ) : (
                <div className={styles.loading}>
                    your code will be show here
                </div>
            )}
        </div>
    );
};

export default Prew;
