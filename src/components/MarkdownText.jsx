import React, { Component } from "react";
import PT from "prop-types";
import remark from "remark";
import remark2react from "remark-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import duotoneLight from "../../node_modules/prism-react-renderer/themes/duotoneLight";

const text = `
## Installing
\`\`\`jsx
console.log(props);
const code = props.children[0];
const text = code.props.children[0];
function add(a, b) {
    return a + b;
  }
\`\`\`
`;

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
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
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
                        .processSync(text).contents
                }
            </div>
        );
    }
}
export default MarkdownText;
