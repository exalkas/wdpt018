// aliases

type age = number;

const numbersInARow: age = 34;

type pupil = {
  name: string;
  age: number;
  city: string;
};

const jim: pupil = {
  name: "Jim",
  age: 5,
  city: "berlin",
};

// interfaces
// they apply ONLY for objects
// interfaces CAN be extended
interface Props {
  color: string;
  products: string[];
  price: number;
}
