// Functions return values and accept values

function demo(): number {
  // this function returns  a value of type 'number'
  return 4;
}

function returnsNothing(): void {
  // when a function returns nothing then is of type void
}

function withParams(a: number, b: number): string {
  return String(a + b);
}

console.log(withParams(3, 4));
// console.log(withParams(3, 4));

interface Props {
  color: string;
  products: string[];
  price: number;
}

function ReactComponent(props: Props) {
  return "Something";
}
