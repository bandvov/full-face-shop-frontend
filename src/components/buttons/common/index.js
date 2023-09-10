export default function CommonButton({ disabled, ...rest }) {
  return (
    <button
      type="button"
      disabled={disabled}
      {...rest}
      class={`
      ${disabled ? "bg-gray-500" : "bg-orange-500"} 
      ${disabled ? "hover:bg-gray-600" : "hover:bg-orange-600"}
      ${disabled && "disabled:opacity-25"} text-white px-7 py-2 border rounded`}
    >
      common
    </button>
  );
}
