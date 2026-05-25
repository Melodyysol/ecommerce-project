// import type { Forms } from "../../types"

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
const FormGrid = () => {


  return (
    <section className="w-full py-20">
      <form className="w-10/12 bg-base-200 mx-auto px-8 py-4 rounded-md grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <div>
          <label htmlFor="search">
            <span className="capitalize text-sm">search product</span>
          </label>
          <input type="search" name="search" className="input input-sm mt-2" />
        </div>

        <div>
          <label htmlFor="category">
            <span className="capitalize text-sm">Select Category</span>
          </label>
          <select name="category" id="category" className="select select-sm cursor-pointer mt-2">
            <option value="all">all</option>
            <option value="Beds">Beds</option>
            <option value="Sovas">Sovas</option>
            <option value="Chairs">Chairs</option>
            <option value="Tables">Tables</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <label htmlFor="company">
            <span className="capitalize text-sm">search company</span>
          </label>
          <select name="company" id="company" className="select select-sm cursor-pointer mt-2">
            <option value="all">all</option>
            <option value="Artifex">Artifex</option>
            <option value="Luxora">Luxora</option>
            <option value="Comfora">Comfora</option>
            <option value="Modenza">Modenza</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>

        <div>
          <label htmlFor="order">
            <span className="capitalize text-sm">sort by</span>
          </label>
          <select name="order" id="order" className="select select-sm cursor-pointer mt-2">
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>

        <div>
          <label htmlFor="price" className="flex items-center justify-between">
            <span className="capitalize text-sm">select price</span>
            <span>$1,000.00</span>
          </label>
          <input type="range" name="price" className=" range range-primary range-sm mt-2" min={0} max={100000} step={1000} value={100000} />
          <div className="font-bold text-sm flex items-center justify-between">
            <span>0</span>
            <span>Max: $1,000.00</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="shipping" className="cursor-pointer">
            <span className="capitalize text-sm">free shipping</span>
          </label>
          <input type="checkbox" name="shipping" className="checkbox checkbox-primary checkbox-sm mt-2" />
        </div>

        <button type="submit" className="btn btn-primary btn-sm uppercase">Search</button>
        <button type="reset" className="btn btn-accent btn-sm uppercase">Reset</button>
      </form>
    </section>
  )
}

export default FormGrid
