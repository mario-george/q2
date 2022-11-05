import { useDispatch, useSelector } from 'react-redux';
import { formPartsActions } from '../formparts';

const Form = (props) => {
  const formpart = useSelector((s) => s.fp.formParts);
  const d = useDispatch();
  const [courseNameInvalid, courseCodeInvalid] = [false, false];
  console.log(props.data);
  const submitHandler = (event) => {
    event.preventDefault();
    d(formPartsActions.increment());
  };
  return (
    <div className="w-full">
      <form class="main-form" onSubmit={submitHandler}>
        <div class="-mx-3 flex flex-row flex-wrap mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="label-form" for="courseTitle">
              Course Title
            </label>

            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {props.data.map((e) => (
                  <option>{e.name}</option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {courseNameInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label class="label-form">Course Code</label>
            <input class="input-form" type="text" placeholder="Course Code" />
            {courseCodeInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>
          {/* Div2  */}
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="label-form tracking-normal" for="courseName">
              Semester
            </label>
            <input
              class="input-form"
              id=""
              type="text"
              placeholder="Semester"
            />
            {courseNameInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="label-form">Year</label>
            <input class="input-form" type="text" placeholder="Year" />
            {courseCodeInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="label-form">Specialization</label>
            <input class="input-form " placeholder="Year of Specialization" />
            {courseNameInvalid && <p class="invalid">invalid</p>}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="label-form ">Contact Hours</label>
            <input class="input-form" type="text" placeholder="Contact Hours" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="label-form ">Lectures</label>
            <input class="input-form" type="text" placeholder="Lectures" />
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="label-form text-sm md:text-lg">Practical</label>
            <input class="input-form" type="text" placeholder="Practical" />
          </div>
        </div>

        <div className="flex w-full  justify-end">
          <button type="submit" className=" sub-btn   ">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
