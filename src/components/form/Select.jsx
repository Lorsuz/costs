import './Select.scss';

const Select = ({text, name, options, handleOnChange, value}) => {
	return (
		<div className="select">
			<label htmlFor={name}>{text}:</label>
			<select 
				name={name} 
				id={name} 
				onChange={handleOnChange}
				value={value}>
					<option value="Selecione algo">Selecione algo</option>
				</select>
			<span></span>
		</div>
	);
}

export default Select;
