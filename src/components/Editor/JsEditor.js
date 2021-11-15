import React, { useContext } from "react";
import { EditorContext } from "../../context/context";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/ext-language_tools";

const JsEditor = () => {
    const { js, setJs } = useContext(EditorContext);

    return (
        <AceEditor
            value={js}
            onChange={(value) => setJs(value)}
            placeholder="Write JS here"
            mode="javascript"
            theme="monokai"
            name="editor_js"
            fontSize="16"
            height={"100%"}
            width={"100%"}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 4,
            }}
        />
    );
};

export default JsEditor;
