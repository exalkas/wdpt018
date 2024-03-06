import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import User from "../components/User";

const UsersPage = () => {
  const [username, setUsername] = useState("");
  const [ageRange, setAgeRange] = useState([18, 70]);
  const [gender, setGender] = useState("any");
  const [totalUsers, setTotalUsers] = useState(0);
  const [ascending, setAscending] = useState(true);

  const { listOfUsers, setListOfUsers } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `/users/list/all?username=${username}&minAge=${ageRange[0]}&maxAge=${
            ageRange[1]
          }&gender=${gender}&skip=0&sort=${ascending ? "asc" : "desc"}`
      );
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        setListOfUsers(response.data.users);
        setTotalUsers(response.data.total);
      }
    };

    fetchData();
  }, []);

  const handleFilter = async () => {
    const response = await axios.get(
      import.meta.env.VITE_BASE_URL +
        `/users/list/all?username=${username}&minAge=${ageRange[0]}&maxAge=${
          ageRange[1]
        }&gender=${gender}&sort=${ascending ? "asc" : "desc"}`
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) setListOfUsers(response.data.users);
  };

  const handleLoadMore = async () => {
    const response = await axios.get(
      import.meta.env.VITE_BASE_URL +
        `/users/list/all?username=${username}&minAge=${ageRange[0]}&maxAge=${
          ageRange[1]
        }&gender=${gender}&skip=${listOfUsers.length}&sort=${
          ascending ? "asc" : "desc"
        }`
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success)
      setListOfUsers((prev) => [...prev, ...response.data.users]);
  };

  const handleSorting = () => {
    setAscending((prev) => !prev);
  };

  useEffect(() => {
    handleFilter();
  }, [ascending]);

  return (
    <div className="flex flex-col items-center justify-center gap-[20px] mt-[40px]">
      <div className="flex justify-center items-center gap-[20px] flex-wrap">
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          id="outlined-basic"
          label="username"
          variant="outlined"
          placeholder="Search by Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "white" }, // Border color on hover
              "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              color: "white", // Text color
            },
            "& .MuiInputLabel-outlined": {
              color: "white", // Label color
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // Input text color
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "white", // Notched outline color
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
              color: "white", // Focused label color
            },
            "& .MuiInputBase-input::placeholder": {
              color: "white", // Placeholder color
              opacity: 1, // Make placeholder fully opaque
            },
          }}
        />
        {/* </Box> */}
        <div>
          <Box sx={{ width: 150 }}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
              Age
            </InputLabel>
            <Slider
              getAriaLabel={() => "Age range"}
              value={ageRange}
              onChange={(e, newValue) => setAgeRange(newValue)}
              valueLabelDisplay="auto"
              getAriaValueText={() => ageRange}
              min={20}
              max={70}
            />
          </Box>
        </div>
        <div>
          <Box sx={{ width: 150 }}>
            <FormControl
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "red" },
                  "&.Mui-focused fieldset": { borderColor: "red" },
                  color: "white",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Gender
              </InputLabel>
              <Select
                sx={{ color: "white", borderColor: "white" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem sx={{ color: "red" }} value={"any"}>
                  Any
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <hr className="w-full" />
      <button onClick={handleSorting}>
        {ascending ? "Descending" : "Ascending"}
      </button>
      {listOfUsers.map((item) => (
        <User key={item._id} data={item} />
      ))}
      <hr className="w-full" />
      {listOfUsers.length < totalUsers && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default UsersPage;
