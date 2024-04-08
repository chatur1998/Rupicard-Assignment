import Icons from "../svg/icons.svg"; 

type IconArgType = {
    name: string;
    color?: string;
    height?: number;
    width?: number;
};

const Icon = ({ name, color, height, width }: IconArgType) => (
  <svg className={`icon icon-${name}`} fill={color} height={height} width={width}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;