const string = "this is a string";
console.log("🚀 ~ string:", string[15]);

console.log("The length of the string is " + string.length);

let address = "abcdefgHIJ kjkjkjret";
console.log("🚀 ~ address:", address[address.length - 1]);

address[0] = "b";
console.log("🚀 ~ address:", address);

// toLowerCase, toUpperCase
console.log(address.toLowerCase());
console.log(address.toUpperCase());

// trim
const username = "    fjkeifff     ";
console.log("🚀 ~ username:", username);
console.log("🚀 ~ username:", username.trim());

// indexOf = searching inside a string
// -1 = not found else returns the index number of the searched string
const sentence = "lorem ipsum and the brown fox jumps over the river";
console.log("🚀 ~ sentence:", sentence[26]);
console.log("🚀 ~ sentence:", sentence.indexOf("foxie"));
console.log("🚀 -------------------------------------");

// slice
// string.slice(start, end) end is not included
console.log("🚀 ~ sentence:", sentence.slice(0, 2));

// start from a point until the end
console.log("🚀 ~ sentence:", sentence.slice(5));

// start from a point until the end but you want 2 chars before the end
console.log("🚀 ~ sentence:", sentence.slice(5, -2));
console.log("🚀 -------------------------------------");

// replace
console.log("🚀 ~ sentence:", sentence.replace("and", "&"));

// replace changes ONLY the 1st occurrence
console.log("🚀 ~ sentence:", sentence.replace("p", "1"));

// replaceAll
console.log("🚀 ~ sentence:", sentence.replaceAll("p", "1"));
