import { useState, useRef, useEffect, useId } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Athens",
  "Berlin",
  "Paris",
  "Vienna",
  "Porto",
  "Warsaw",
  "London",
  "Liverpool",
];

export default function Profile() {
  const [userData, setUserData] = useState({
    username: "john",
    email: "1@1.com",
  });

  const [file, setFile] = useState("");
  //   const [username, setUserName] = useState('john')
  //   const [email, setEmail] = useState('1@1.com')
  const emailId = useId();
  const nameId = useId();
  //   console.log("🚀 ~ emailId:", emailId);
  const inputRef = useRef();
  //   console.log("🚀 ~ input:", inputRef);

  const [value, setValue] = useState("female");
  const [personName, setPersonName] = useState([]);

  const handleChangeMultiSelect = (e) => {
    setPersonName(e.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleImageChange = (e) => {
    console.log("🚀 ~ e:", e.currentTarget.files[0]);

    // const file = URL.createObjectURL(e.currentTarget.files[0]);

    setFile(URL.createObjectURL(e.currentTarget.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();

    // localStorage.setItem
    formdata.set("username", userData.username);
    formdata.set("email", userData.email);
    formdata.set("gender", value);

    for (let [key, value] of formdata.entries()) {
      console.log(key, value);
    }
    // axios.post('/dsfjkhsk', formdata)
  };

  //   console.log("userdata", userData);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[10px] items-center justify-center text-white">
        <div>
          <label>
            User name:
            <input
              id={nameId}
              ref={inputRef}
              type="text"
              value={userData.username}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  username: e.target.value,
                })
              }
            />
          </label>
        </div>
        <div>
          <label>
            email:
            <input
              id={emailId}
              type="text"
              readOnly
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            Select your image
            <input type="file" hidden onChange={handleImageChange} />
          </label>
        </div>
        <div>
          <img src={file} className="w-[200px] h-[200px]" />
        </div>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="n/a" control={<Radio />} label="N/A" />
          </RadioGroup>
        </FormControl>
      </div>
      <hr />
      <div>
        <FormControl sx={{ m: 1, width: 300 }} className="text-white">
          <InputLabel id="demo-multiple-checkbox-label">City</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChangeMultiSelect}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <input type="submit" placeholder="Submit" />
    </form>
  );
}
