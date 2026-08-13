export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element;
