import React, { useState } from "react";
import SPInput from "../../component/SPinput";
// import { fbAdd } from '../../config/firebaseMethods';
import SPButton from "../../component/SPbutton";

export default function CourseForm() {
  const [courseData, setCourseData] = useState<any>({});

  //   const Addtask = () => {
  //     fbAdd("CourseForm",courseData)
  //     .then((res)=>{
  //       console.log(res);
  //       setCourseData({});
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  //   };

  return (
    <div>
      <div className="Inform">
        <div>
          <SPInput
            value={courseData.name}
            label="Course Name"
            onChange={(e: any) =>
              setCourseData({ ...courseData, CourseName: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={courseData.email}
            label="Duration"
            onChange={(e: any) =>
              setCourseData({ ...courseData, Duration: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={courseData.password}
            label="Fee"
            onChange={(e: any) =>
              setCourseData({ ...courseData, Fee: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={courseData.Teacher}
            label="Teacher"
            onChange={(e: any) =>
              setCourseData({ ...courseData, Teacher: e.target.value })
            }
          />
        </div>
        <div className="instbtn">
          <SPButton
            label="Submit"
            //  onClick={Addtask}
          />
        </div>
      </div>
    </div>
  );
}
