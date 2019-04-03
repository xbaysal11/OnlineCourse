import React, { Component } from "react";
import PT from "prop-types";
import remark from "remark";
import remark2react from "remark-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import duotoneLight from "../../node_modules/prism-react-renderer/themes/duotoneLight";
import "./LineNumbers.css";

const pre = props => {
    const code = props.children[0];
    const text = code.props.children[0];
    // debugger;
    return (
        <Highlight
            {...defaultProps}
            code={text}
            language="jsx"
            theme={duotoneLight}
        >
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style} className={"line"}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                    <div className="line-numbers-rows">
                        {tokens.map((_, i) => (
                            <span>{i}</span>
                        ))}
                    </div>
                </pre>
            )}
        </Highlight>
    );
};

class MarkdownText extends Component {
    static propTypes = {
        text: PT.string
    };
    render() {
        return (
            <div>
                {
                    remark()
                        .use(remark2react, {
                            remarkReactComponents: { pre }
                        })
                        .processSync(this.props.text).contents
                }
            </div>
        );
    }
}
export default MarkdownText;
