import React, { Component, useState } from "react";

import ReactConsole from "react-console";

const Console = () => {
    const [history, setHistory] = useState([
        "echo hello world",
        "sleep 1000",
        "sleep 2000",
        "sleep 3000",
        "echo ola",
        "not found"
    ]);

    return (
        <div>
            <ReactConsole
                autoFocus
                welcomeMessage="Welcome"
                commands={{
                    history: {
                        description: "History",
                        fn: () =>
                            new Promise(resolve => {
                                resolve(`${history.join("\r\n")}`);
                            })
                    },
                    echo: {
                        description: "Echo",
                        fn: (...args) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve(`${args.join(" ")}`);
                                }, 2000);
                            });
                        }
                    },
                    test: {
                        description: "Test",
                        fn: (...args) => {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve("Hello world \n\n hello \n");
                                }, 2000);
                            });
                        }
                    }
                }}
            />
        </div>
    );
};
export default Console;
