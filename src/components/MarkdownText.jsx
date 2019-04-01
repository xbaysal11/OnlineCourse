import React, { Component } from "react";
import PT from "prop-types";
import remark from "remark";
import remark2react from "remark-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const text = `
## Installing
\`\`\`javascript
console.log(props);
const code = props.children[0];
const text = code.props.children[0];
\`\`\`
`;

const pre = props => {
    const code = props.children[0];
    const text = code.props.children[0];
    debugger;
    return (
        <Highlight Prism={Prism} {...defaultProps} code={text} language="js">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className}>
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
                            remarkReactComponents: {
                                pre
                            }
                        })
                        .processSync(text).contents
                }
            </div>
        );
    }
}
export default MarkdownText;
