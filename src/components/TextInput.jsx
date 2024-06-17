import { Label } from "./Label";

export const TextInput = ({value, name, placeholder, handleChange, error}) => {

    return(
        <Label>
             <input
              type="text"
              placeholder={placeholder}
              className="input input-bordered input-primary w-full"
              value={value}
              onChange={handleChange}
            />
            {error[name] && (
              <div className="label">
                <span className="label-text-alt text-error">{error[name]}</span>
              </div>
            )}
        </Label>
    )


}