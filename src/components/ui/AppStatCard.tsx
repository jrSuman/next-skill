import AppIcon from "./AppIcon";

interface PropsTypes{
  icon: string;
  label: string;
  value: string;
}

const AppInfoCard = (props: PropsTypes) => {
  const {icon, label, value} = props;
  return(
    <div className="w-[320px] flex gap-4">
      <div className="w-10 h-10 bg-primary-50 flex items-center justify-center rounded-lg">
        <AppIcon name={icon} className="w-4 h-4"/>
      </div>
      <div className="flex flex-col">
        <span className="text-xs">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  )
}

export default AppInfoCard;