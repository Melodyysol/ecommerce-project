// import type { Forms } from "../../types"

import { useRef, useState } from "react";
import type { FormGridData } from "../../types";
import { formatCurrency } from "../../utilitis/money";

// const forms: Forms = [{
//   name: 'search',
//   labelName: 'search',
//   inputType: 'search'
// },{
//   name: 'search',
//   labelName: 'search',
//   inputType: 'search'
// },{
//   name: 'search',
//   labelName: 'search',
//   inputType: 'search'
// },{
//   name: 'search',
//   labelName: 'search',
//   inputType: 'search'
// }]

const companies = ["all", "ikea", "marcos", "liddy", "caressa"];

const categories = [
  "all",
  "office",
  "living room",
  "kitchen",
  "bedroom",
  "dining",
  "kids",
];

const FormGrid = ({
  setSubmitedData,
  setIsShipping,
}: {
  setSubmitedData: (sub: FormGridData) => void;
  setIsShipping: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const search = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const order = useRef<HTMLSelectElement>(null);
  const companyRef = useRef<HTMLSelectElement>(null);
  const range = useRef<HTMLInputElement>(null);

  const [rangeInput, setRangeInput] = useState<number>(5000);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchValue = search.current!.value;
    const categoryValue = categoryRef.current!.value;
    const orderValue = order.current!.value;
    const companyValue = companyRef.current!.value;
    const rangeValue = range.current!.value;

    setSubmitedData({
      search: searchValue,
      categoryRef: categoryValue,
      order: orderValue,
      companyRef: companyValue,
      range: rangeValue,
    });
  };

  return (
    <section className="w-full py-20">
      <form
        onSubmit={handleSubmit}
        className="w-10/12 bg-base-200 mx-auto px-8 py-4 rounded-md grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
      >
        <div>
          <label htmlFor="search">
            <span className="capitalize text-sm">search product</span>
          </label>
          <input
            ref={search}
            type="search"
            name="search"
            className="input input-sm mt-2"
          />
        </div>

        <div>
          <label htmlFor="category">
            <span className="capitalize text-sm">Select Category</span>
          </label>
          <select
            ref={categoryRef}
            name="category"
            id="category"
            className="select select-sm cursor-pointer mt-2 capitalize"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="company">
            <span className="capitalize text-sm">search company</span>
          </label>
          <select
            ref={companyRef}
            name="company"
            id="company"
            className="select select-sm cursor-pointer mt-2 capitalize"
          >
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="order">
            <span className="capitalize text-sm">sort by</span>
          </label>
          <select
            ref={order}
            name="order"
            id="order"
            className="select select-sm cursor-pointer mt-2"
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="flex items-center justify-between">
            <span className="capitalize text-sm">select price</span>
            <span>{formatCurrency(rangeInput * 100)}</span>
          </label>
          <input
            ref={range}
            onChange={(e) => setRangeInput(Number(e.target.value))}
            type="range"
            name="price"
            className=" range range-primary range-sm mt-2"
            min={0}
            max={5000}
            step={100}
            value={rangeInput}
          />
          <div className="font-bold text-sm flex items-center justify-between">
            <span>0</span>
            <span>Max: {formatCurrency(500000)}</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="shipping" className="cursor-pointer">
            <span className="capitalize text-sm">free shipping</span>
          </label>
          <input
            onChange={() => setIsShipping((prev) => !prev)}
            type="checkbox"
            name="shipping"
            className="checkbox checkbox-primary checkbox-sm mt-2"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm uppercase">
          Search
        </button>
        <button type="reset" className="btn btn-accent btn-sm uppercase">
          Reset
        </button>
      </form>
    </section>
  );
};

export default FormGrid;
