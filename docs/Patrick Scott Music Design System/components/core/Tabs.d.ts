export interface TabsProps {
  tabs?: string[];
  active?: string;
  onChange?: (tab: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
