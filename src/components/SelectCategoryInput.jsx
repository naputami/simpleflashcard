import { Label } from "./Label";

export const SelectCategoryInput = ({value, error, handleChange}) => {

    return(
        <Label>
              <select
              className="select select-primary w-full"
              value={value}
              onChange={handleChange}
            >
              <option disabled value="">
                Pilih kategori
              </option>
              <option value="noun">noun</option>
              <option value="adjective">adjective</option>
              <option value="adverb">adverb</option>
              <option value="verb">verb</option>
            </select>
            {error.category && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {error.category}
                </span>
              </div>
            )}
        </Label>
    )
}