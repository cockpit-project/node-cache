"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draggable = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_dom_1 = require("react-dom");
const DroppableContext_1 = require("./DroppableContext");
const DragDrop_1 = require("./DragDrop");
// Browsers really like being different from each other.
function getDefaultBackground() {
    const div = document.createElement('div');
    document.head.appendChild(div);
    const bg = window.getComputedStyle(div).backgroundColor;
    document.head.removeChild(div);
    return bg;
}
function getInheritedBackgroundColor(el) {
    const defaultStyle = getDefaultBackground();
    const backgroundColor = window.getComputedStyle(el).backgroundColor;
    if (backgroundColor !== defaultStyle) {
        return backgroundColor;
    }
    else if (!el.parentElement) {
        return defaultStyle;
    }
    return getInheritedBackgroundColor(el.parentElement);
}
function removeBlankDiv(node) {
    if (node.getAttribute('blankDiv') === 'true') {
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (child.getAttribute('blankDiv') === 'true') {
                node.removeChild(child);
                node.setAttribute('blankDiv', 'false');
                break;
            }
        }
    }
}
// Reset per-element state
function resetDroppableItem(droppableItem) {
    removeBlankDiv(droppableItem.node);
    droppableItem.node.style.boxShadow = '';
    droppableItem.draggableNodes.forEach((n, i) => {
        n.style.transform = '';
        n.style.transition = '';
        droppableItem.draggableNodesRects[i] = n.getBoundingClientRect();
    });
}
function overlaps(ev, rect) {
    return (ev.clientX > rect.x && ev.clientX < rect.x + rect.width && ev.clientY > rect.y && ev.clientY < rect.y + rect.height);
}
const Draggable = (_a) => {
    var { className, children, style: styleProp } = _a, props = tslib_1.__rest(_a, ["className", "children", "style"]);
    /* eslint-disable prefer-const */
    let [style, setStyle] = React.useState(styleProp);
    /* eslint-enable prefer-const */
    const [isDragging, setIsDragging] = React.useState(false);
    const { zone, droppableId } = React.useContext(DroppableContext_1.DroppableContext);
    const { onDrag, onDrop } = React.useContext(DragDrop_1.DragDropContext);
    const ref = React.createRef();
    // Some state is better just to leave as vars passed around between various callbacks
    // You can only drag around one item at a time anyways...
    let startX = 0;
    let startY = 0;
    let index = null; // Index of this draggable
    let hoveringDroppable;
    let hoveringIndex = null;
    let mouseMoveListener;
    let mouseUpListener;
    // Makes it so dragging the _bottom_ of the item over the halfway of another moves it
    let startYOffset = 0;
    // After item returning to where it started animation completes
    const onTransitionEnd = (_ev) => {
        if (isDragging) {
            setIsDragging(false);
            setStyle(styleProp);
        }
    };
    const onMouseUpWhileDragging = (droppableItems) => {
        droppableItems.forEach(resetDroppableItem);
        document.removeEventListener('mousemove', mouseMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
        document.removeEventListener('contextmenu', mouseUpListener);
        const hoveringDroppableId = hoveringDroppable ? hoveringDroppable.getAttribute('data-pf-droppableid') : null;
        const source = {
            droppableId,
            index
        };
        const dest = hoveringDroppableId !== null && hoveringIndex !== null
            ? {
                droppableId: hoveringDroppableId,
                index: hoveringIndex
            }
            : undefined;
        const consumerReordered = onDrop(source, dest);
        if (consumerReordered && droppableId === hoveringDroppableId) {
            setIsDragging(false);
            setStyle(styleProp);
        }
        else if (!consumerReordered) {
            // Animate item returning to where it started
            setStyle(Object.assign(Object.assign({}, style), { transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s', transform: '', background: styleProp.background, boxShadow: styleProp.boxShadow }));
        }
    };
    // This is where the magic happens
    const onMouseMoveWhileDragging = (ev, droppableItems, blankDivRect) => {
        // Compute each time what droppable node we are hovering over
        hoveringDroppable = null;
        droppableItems.forEach(droppableItem => {
            const { node, rect, isDraggingHost, draggableNodes, draggableNodesRects } = droppableItem;
            if (overlaps(ev, rect)) {
                // Add valid dropzone style
                node.style.boxShadow = '0px 0px 0px 1px blue, 0px 2px 5px rgba(0, 0, 0, 0.2)';
                hoveringDroppable = node;
                // Check if we need to add a blank div row
                if (node.getAttribute('blankDiv') !== 'true' && !isDraggingHost) {
                    const blankDiv = document.createElement('div');
                    blankDiv.setAttribute('blankDiv', 'true'); // Makes removing easier
                    let blankDivPos = -1;
                    for (let i = 0; i < draggableNodes.length; i++) {
                        const childRect = draggableNodesRects[i];
                        const isLast = i === draggableNodes.length - 1;
                        const startOverlaps = childRect.y >= startY - startYOffset;
                        if ((startOverlaps || isLast) && blankDivPos === -1) {
                            if (isLast && !startOverlaps) {
                                draggableNodes[i].after(blankDiv);
                            }
                            else {
                                draggableNodes[i].before(blankDiv);
                            }
                            blankDiv.style.height = `${blankDivRect.height}px`;
                            blankDiv.style.width = `${blankDivRect.width}px`;
                            node.setAttribute('blankDiv', 'true'); // Makes removing easier
                            blankDivPos = i;
                        }
                        if (blankDivPos !== -1) {
                            childRect.y += blankDivRect.height;
                        }
                    }
                    // Insert so drag + drop behavior matches single-list case
                    draggableNodes.splice(blankDivPos, 0, blankDiv);
                    draggableNodesRects.splice(blankDivPos, 0, blankDivRect);
                    // Extend hitbox of droppable zone
                    rect.height += blankDivRect.height;
                }
            }
            else {
                resetDroppableItem(droppableItem);
                node.style.boxShadow = '0px 0px 0px 1px red, 0px 2px 5px rgba(0, 0, 0, 0.2)';
            }
        });
        // Move hovering draggable and style it based on cursor position
        setStyle(Object.assign(Object.assign({}, style), { boxShadow: `0px 0px 0px 1px ${hoveringDroppable ? 'blue' : 'red'}, 0px 2px 5px rgba(0, 0, 0, 0.2)`, transform: `translate(${ev.pageX - startX}px, ${ev.pageY - startY}px)`, cursor: !hoveringDroppable && 'not-allowed' }));
        // Iterate through sibling draggable nodes to reposition them and store correct hoveringIndex for onDrop
        hoveringIndex = null;
        if (hoveringDroppable) {
            const { draggableNodes, draggableNodesRects } = droppableItems.find(item => item.node === hoveringDroppable);
            let lastTranslate = 0;
            draggableNodes.forEach((n, i) => {
                n.style.transition = 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s';
                const rect = draggableNodesRects[i];
                const halfway = rect.y + rect.height / 2;
                let translateY = 0;
                // Use offset for more interactive translations
                if (startY < halfway && ev.pageY + (blankDivRect.height - startYOffset) > halfway) {
                    translateY -= blankDivRect.height;
                }
                else if (startY >= halfway && ev.pageY - startYOffset <= halfway) {
                    translateY += blankDivRect.height;
                }
                // Clever way to find item currently hovering over
                if ((translateY <= lastTranslate && translateY < 0) || (translateY > lastTranslate && translateY > 0)) {
                    hoveringIndex = i;
                }
                n.style.transform = `translate(0, ${translateY}px`;
                lastTranslate = translateY;
            });
        }
    };
    const onDragStart = (ev) => {
        // Default HTML drag and drop doesn't allow us to change what the thing
        // being dragged looks like. Because of this we'll use prevent the default
        // and use `mouseMove` and `mouseUp` instead
        ev.preventDefault();
        if (isDragging) {
            // still in animation
            return;
        }
        // Cache droppable and draggable nodes and their bounding rects
        const rect = ref.current.getBoundingClientRect();
        const droppableNodes = Array.from(document.querySelectorAll(`[data-pf-droppable="${zone}"]`));
        const droppableItems = droppableNodes.reduce((acc, cur) => {
            const draggableNodes = Array.from(cur.querySelectorAll(`[data-pf-draggable-zone="${zone}"]`));
            const isDraggingHost = cur.contains(ref.current);
            if (isDraggingHost) {
                index = draggableNodes.indexOf(ref.current);
            }
            const droppableItem = {
                node: cur,
                rect: cur.getBoundingClientRect(),
                isDraggingHost,
                draggableNodes,
                draggableNodesRects: draggableNodes.map(node => node.getBoundingClientRect())
            };
            acc.push(droppableItem);
            return acc;
        }, []);
        if (!onDrag({ droppableId, index })) {
            // Consumer disallowed drag
            return;
        }
        // Set initial style so future style mods take effect
        style = Object.assign(Object.assign({}, style), { position: 'fixed', top: rect.y, left: rect.x, width: rect.width, height: rect.height, background: getInheritedBackgroundColor(ref.current), boxShadow: '0px 0px 0px 1px blue, 0px 2px 5px rgba(0, 0, 0, 0.2)', zIndex: 5000 });
        setStyle(style);
        // Store event details
        startX = ev.pageX;
        startY = ev.pageY;
        startYOffset = startY - rect.y;
        setIsDragging(true);
        mouseMoveListener = ev => onMouseMoveWhileDragging(ev, droppableItems, rect);
        mouseUpListener = () => onMouseUpWhileDragging(droppableItems);
        document.addEventListener('mousemove', mouseMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
        // Comment out this line to debug while dragging by right clicking
        document.addEventListener('contextmenu', mouseUpListener);
    };
    const div = (React.createElement("div", Object.assign({ "data-pf-draggable-zone": isDragging ? null : zone, draggable: true, role: "button", className: className, onDragStart: onDragStart, onTransitionEnd: onTransitionEnd, style: style, ref: ref }, props), children));
    return (React.createElement(React.Fragment, null,
        isDragging && (React.createElement("div", Object.assign({ draggable: true, role: "button" }, props, { style: Object.assign(Object.assign({}, styleProp), { visibility: 'hidden' }) }), children)),
        isDragging ? react_dom_1.createPortal(div, document.body) : div));
};
exports.Draggable = Draggable;
exports.Draggable.displayName = 'Draggable';
//# sourceMappingURL=Draggable.js.map