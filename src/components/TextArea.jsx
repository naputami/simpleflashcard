import { Label } from "./Label";

export const TextArea = ({ value, name, placeholder, handleChange, error }) => {
  return (
    <Label>
      <textarea
        className="textarea textarea-primary w-full"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      ></textarea>
      {error[name] && (
        <div className="label">
          <span className="label-text-alt text-error">{error[name]}</span>
        </div>
      )}
    </Label>
  );
};
