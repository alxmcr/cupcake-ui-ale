import { OptionData } from '../../../types/appTypes';
import { SkeletonListOptionsUser } from '../../01_atoms/SkeletonListOptionsUser';
import { ListOptionsUser } from '../ListOptionsUser';

type Props = {
  options: OptionData[];
  idOptionSelected: string;
  isLoadingOptions: boolean;
  searchText: string;
  isFiltering: boolean;
  onClickSelectOption: (idSelected?: string, nameSelected?: string) => void;
};

export default function WrapperListOptions({
  options = [],
  idOptionSelected = '',
  isLoadingOptions = false,
  searchText = '',
  isFiltering = false,
  onClickSelectOption,
}: Props) {
  const optionsFiltered =
    searchText === ''
      ? options
      : options.filter((option) =>
          option.text.toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim()),
        );

  const optionsToSort = isFiltering ? optionsFiltered : options;

  const optionsToRender = optionsToSort.sort((optionA, optionB) => {
    return optionA.text.localeCompare(optionB.text, undefined, {
      sensitivity: 'base',
    });
  });

  if (isLoadingOptions) {
    return (
      <div className="u-list-options-shadow max-h-[126px] w-[268px] rounded-lg md:w-[632px] lg:w-[996px]">
        <SkeletonListOptionsUser className="max-h-[126px] w-full" />
      </div>
    );
  }

  return (
    <div className="u-list-options-shadow max-h-[126px] w-[268px] rounded-lg p-2 md:w-[632px] lg:w-[996px]">
      <ListOptionsUser
        options={optionsToRender}
        onClickSelectOption={onClickSelectOption}
        idOptionSelected={idOptionSelected}
      />
    </div>
  );
}
