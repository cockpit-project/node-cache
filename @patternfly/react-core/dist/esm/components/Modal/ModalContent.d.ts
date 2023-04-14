import * as React from 'react';
import { OUIAProps } from '../../helpers';
export interface ModalContentProps extends OUIAProps {
    /** Action buttons to add to the standard modal footer. Ignored if the footer property
     * is passed in.
     */
    actions?: any;
    /** Id to use for the modal box descriptor. */
    'aria-describedby'?: string;
    /** Accessible descriptor of the modal. */
    'aria-label'?: string;
    /** Id to use for the modal box label. */
    'aria-labelledby'?: string | null;
    /** Accessible label applied to the modal box body. This should be used to communicate
     * important information about the modal box body div element if needed, such as that it
     * is scrollable.
     */
    bodyAriaLabel?: string;
    /** Accessible role applied to the modal box body. This will default to "region" if the
     * bodyAriaLabel property is passed in. Set to a more appropriate role as applicable
     * based on the modal content and context.
     */
    bodyAriaRole?: string;
    /** Id of the modal box container. */
    boxId: string;
    /** Content rendered inside the modal. */
    children: React.ReactNode;
    /** Additional classes added to the modal box. */
    className?: string;
    /** Description of the modal. */
    description?: React.ReactNode;
    /** Id of the modal box description. */
    descriptorId: string;
    /** Flag to disable focus trap. */
    disableFocusTrap?: boolean;
    /** Custom footer. */
    footer?: React.ReactNode;
    /** Flag indicating if modal content should be placed in a modal box body wrapper. */
    hasNoBodyWrapper?: boolean;
    /** Complex header (more than just text), supersedes the title property for header content. */
    header?: React.ReactNode;
    /** Optional help section for the modal header. */
    help?: React.ReactNode;
    /** Flag to show the modal. */
    isOpen?: boolean;
    /** Id of the modal box title. */
    labelId: string;
    /** A callback for when the close button is clicked. */
    onClose?: () => void;
    /** Alternate position of the modal. */
    position?: 'top';
    /** Offset from alternate position. Can be any valid CSS length/percentage. */
    positionOffset?: string;
    /** Flag to show the close button in the header area of the modal. */
    showClose?: boolean;
    /** Simple text content of the modal header. Also used for the aria-label on the body. */
    title?: string;
    /** Optional alert icon (or other) to show before the title of the modal header. When the
     * predefined alert types are used the default styling will be automatically applied.
     */
    titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'default' | React.ComponentType<any>;
    /** Optional title label text for screen readers. */
    titleLabel?: string;
    /** Variant of the modal. */
    variant?: 'small' | 'medium' | 'large' | 'default';
    /** Default width of the modal. */
    width?: number | string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
export declare const ModalContent: React.FunctionComponent<ModalContentProps>;
//# sourceMappingURL=ModalContent.d.ts.map