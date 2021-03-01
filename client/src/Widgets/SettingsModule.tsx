import { useRef } from "react";
import { useClickOutside } from "../Hooks/useClickOutside";

interface Props {
	text: string;
	handleOption: (id: string) => void;
}

export const SettingModule = ({
	options,
	id,
	offClick,
}: {
	options: Props[];
	id: string;
	offClick: (val: boolean) => void;
}) => {
	const optionRef = useRef<HTMLDivElement>(null);

	const onClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		if (optionRef.current) {
			offClick(false);
		}
	};

	useClickOutside(optionRef, onClickOutside);
	return (
		<>
			<div className='setting_module_container' ref={optionRef}>
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
