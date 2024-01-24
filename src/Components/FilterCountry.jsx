
const FilterCountry = ({ onSelect }) => {
    const selectHandler = (e) => {
        const regionName = e.target.value;
        onSelect(regionName);
    }
  return (
    <div className="">
    <select className="form-select border-0 select-box" 
            onChange={selectHandler}>
      <option value="Africa">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    </div>
  )
}

export default FilterCountry
