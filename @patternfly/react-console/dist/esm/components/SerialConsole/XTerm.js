import React, { useImperativeHandle } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { debounce, canUseDOM } from '@patternfly/react-core';
export const XTerm = ({ cols = 80, rows = 25, fontFamily, fontSize, onTitleChanged, onData, innerRef }) => {
    let terminal;
    const ref = React.useRef();
    useImperativeHandle(innerRef, () => ({
        focusTerminal() {
            if (terminal) {
                terminal.focus();
            }
        },
        /**
         * Backend sent data.
         *
         * @param {string} data String content to be writen into the terminal
         */
        onDataReceived: (data) => {
            if (terminal) {
                terminal.write(data);
            }
        },
        /**
         * Backend closed connection.
         *
         * @param {string} reason String error to be written into the terminal
         */
        onConnectionClosed: (reason) => {
            if (terminal) {
                terminal.write(`\x1b[31m${reason || 'disconnected'}\x1b[m\r\n`);
                terminal.refresh(terminal.rows, terminal.rows); // start to end row
            }
        }
    }));
    React.useEffect(() => {
        const fitAddon = new FitAddon();
        terminal = new Terminal({
            cols,
            rows,
            cursorBlink: true,
            fontFamily,
            fontSize,
            screenReaderMode: true
        });
        const onWindowResize = () => {
            const geometry = fitAddon.proposeDimensions();
            if (geometry) {
                terminal.resize(geometry.rows, geometry.cols);
            }
        };
        if (onData) {
            terminal.onData(onData);
        }
        if (onTitleChanged) {
            terminal.onTitleChange(onTitleChanged);
        }
        terminal.loadAddon(fitAddon);
        terminal.open(ref.current);
        const resizeListener = debounce(onWindowResize, 100);
        if (!rows) {
            if (canUseDOM) {
                window.addEventListener('resize', resizeListener);
            }
            onWindowResize();
        }
        terminal.focus();
        return () => {
            terminal.dispose();
            if (canUseDOM) {
                window.removeEventListener('resize', resizeListener);
            }
            onFocusOut();
        };
    }, []);
    const onBeforeUnload = (event) => {
        // Firefox requires this when the page is in an iframe
        event.preventDefault();
        // see "an almost cross-browser solution" at
        // https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
        event.returnValue = '';
        return '';
    };
    const onFocusIn = () => {
        window.addEventListener('beforeunload', onBeforeUnload);
    };
    const onFocusOut = () => {
        window.removeEventListener('beforeunload', onBeforeUnload);
    };
    // ensure react never reuses this div by keying it with the terminal widget
    // Workaround for xtermjs/xterm.js#3172
    return React.createElement("div", { ref: ref, className: "pf-c-console__xterm", role: "list", onFocus: onFocusIn, onBlur: onFocusOut });
};
XTerm.displayName = 'XTerm';
//# sourceMappingURL=XTerm.js.map