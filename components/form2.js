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
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="label-form" for="courseTitle">
              Course Aims
            </label>
            <textarea
              rows="6"
              className="w-full input-form"
              placeholder="Type here the Course Aims"></textarea>

            {courseNameInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>

          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="label-form" for="courseTitle">
              Course Contents (As indicated in the program Bylaw)
            </label>
            <textarea
              rows="6"
              className="w-full input-form"
              placeholder="Type here the Course Contents"></textarea>

            {courseNameInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="label-form" for="courseTitle">
              Course Contents (As indicated in the program Bylaw)
            </label>
            <div className="ml-[1rem]">
              <label htmlFor="">Level (A) Engineering Competencies</label>
              <textarea
                rows="6"
                className="w-full input-form pl-1"
                placeholder="Level (A) Engineering Competencies"></textarea>
              <label htmlFor="">
                Level (B) Electrical Engineering Competencies
              </label>
              <textarea
                rows="6"
                className="w-full input-form pl-1"
                placeholder="Level (B) Electrical Engineering Competencies"></textarea>
            </div>

            {courseNameInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
          </div>
          {/*  Learning Outcomes (LO’s)  */}
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="label-form" for="courseTitle">
              Learning Outcomes
            </label>
            <textarea
              rows="6"
              className="w-full input-form"
              placeholder="Type here the Learning Outcomes"></textarea>

            {courseNameInvalid && (
              <p class="text-red-500 tracking-widest text-xs md:text-sm  ">
                <div>Please fill out this field.</div>
              </p>
            )}
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
