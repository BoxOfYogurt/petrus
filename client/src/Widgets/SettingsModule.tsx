interface Props {
  text: string;
  handleOption: (id: string) => void;
}

export const SettingModule = ({
  options,
  id,
}: {
  options: Props[];
  id: string;
}) => {
  return (
    <>
      <div className='setting_module_container'>
        <ul className='setting_module_inner'>
          {options.map((option, index) => {
            return (
              <li key={index} onClick={() => option.handleOption(id)}>
                <p>{`${option.text} NOT IMPLEMENTED`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
