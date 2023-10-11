import { useState } from "react";
import SPInput from "../../../component/SPinput";
import SPSelect from "../../../component/SPselect";
import SPButton from "../../../component/SPbutton";
// import "../admin/instituteform.css";
// import { fbAdd } from "../../config/firebaseMethods";

export default function InstituteForm() {
  const [instList, setInstList] = useState<any>({});

  //   const Addtask = () => {
  //     fbAdd("InstitutteForm",instList)
  //     .then((res)=>{
  //       console.log(res);
  //       setInstList({});
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
            value={instList.InstituteName}
            label="Institute Name"
            onChange={(e: any) =>
              setInstList({ ...instList, InstituteName: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.InstituteShortName}
            label="Institute Short Name"
            onChange={(e: any) =>
              setInstList({ ...instList, InstituteShortName: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.LogoImage}
            label="Logo Image"
            onChange={(e: any) =>
              setInstList({ ...instList, Image: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.NoOfCampus}
            label="No of Campus"
            onChange={(e: any) =>
              setInstList({ ...instList, NoOfCampus: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.Campusdetails}
            label="Campus details"
            onChange={(e: any) =>
              setInstList({ ...instList, Campusdetails: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.Active}
            label="Active"
            onChange={(e: any) =>
              setInstList({ ...instList, Active: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.Location}
            label="Location"
            onChange={(e: any) =>
              setInstList({ ...instList, Location: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.Address}
            label="Address"
            onChange={(e: any) =>
              setInstList({ ...instList, Address: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.Contact}
            label="Contact"
            onChange={(e: any) =>
              setInstList({ ...instList, Contact: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.OwnerContact}
            label="Owner Contact"
            onChange={(e: any) =>
              setInstList({ ...instList, OwnerContact: e.target.value })
            }
          />
        </div>
        <div>
          <SPInput
            value={instList.OwnerEmail}
            label="Owner Email"
            onChange={(e: any) =>
              setInstList({ ...instList, OwnerEmail: e.target.value })
            }
          />
        </div>
        <div>
          <SPSelect
            value={instList.UserInstType}
            label="User Institute Type"
            options={[
              {
                displayName: "none",
              },
              {
                value: "school",
                displayName: "School",
              },
              {
                value: "college",
                displayName: "College",
              },
              {
                value: "university",
                displayName: "University",
              },
              {
                value: "institute",
                displayName: "Institute",
              },
            ]}
            onChange={(e: any) =>
              setInstList({ ...instList, UserInstType: e.target.value })
            }
          />
        </div>
        <div className="instbtn">
          <SPButton
            label="Submit"
            //   onClick={Addtask}
          />
        </div>
      </div>
    </div>
  );
}
// value={instList.UserInstType} this is use to emty/remove text on label
