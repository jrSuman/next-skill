import AppIcon from "./AppIcon";

interface PropsTypes{
  icon: string;
  label: string;
  value: string;
}

const AppStatCard = (props: PropsTypes) => {
  const {icon, label, value} = props;
  return(
    <div className="bg-white rounded-lg pl-3 pr-6  py-2 border flex gap-4">
      <AppIcon name={icon} className="w-10 h-10"/>
      <div className="flex flex-col">
        <span className="text-xs">{label}</span>
        <span className="font-bold">{value}</span>
      </div>
    </div>
  )
}

export default AppStatCard;