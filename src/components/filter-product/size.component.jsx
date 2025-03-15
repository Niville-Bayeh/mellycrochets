import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "none",
    // border: "none",
    // boxShadow: "none",
  }),
  option: (styles, { isFocused, isSelected, isHovered }) => ({
    ...styles,
    backgroundColor: isSelected
      ? "#eb6753"
      : isHovered || isFocused
      ? "#eb675312"
      : undefined,
    color: isSelected ? "white" : "black",
  }),
};

const SizeSelect = ({ size, setSize, loading, crochets, isLoading }) => {
  const options =
    crochets && crochets.length
      ? crochets.map((crochet) => {
          return {
            value: crochet.size,
            label: crochet.size,
          };
        })
      : [];

  const selectedModel = options.find((option) => option.value === size) || null;

  return (
    <Select
      defaultValue={options[0]}
      name="size"
      options={options}
      styles={customStyles}
      className="w-full text-start"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setSize(selected?.value || "")}
      isClearable={true}
      isLoading={isLoading}
      isDisabled={loading}
    />
  );
};

export default SizeSelect;
