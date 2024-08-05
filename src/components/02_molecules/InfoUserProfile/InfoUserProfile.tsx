import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';
import { LabelOption } from '../../01_atoms/LabelOption';

type Props = {
  text: string;
  selected: boolean;
};

export default function InfoUserProfile({ text = '', selected = false }: Props) {
  if (selected) {
    return (
      <div className="flex h-[22px] items-center justify-between gap-2">
        <AppIcon16x16 iconName="icon-profile" className="text-gray-600" />
        <LabelOption selectedItem text={text} />
      </div>
    );
  }
  return (
    <div className="flex h-[22px] items-center justify-between gap-2">
      <AppIcon16x16 iconName="icon-profile" className="text-gray-500" />
      <LabelOption text={text} />
    </div>
  );
}
