import { useSelector } from 'react-redux';

const Form = (props) => {
  const [courseNameInvalid, courseCodeInvalid] = [false, false];
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-full">
      <form class="main-form">
        <div class="-mx-3 flex flex-row flex-wrap mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="label-form" for="courseTitle">
              Course Title
            </label>
            <input
              class="input-form"
              id=""
              type="text"
              placeholder="Course Title"
            />
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
// flex-wrap if the items reached the max it will go to the second line
// tracking-wide  is 	letter-spacing: 0.025em
