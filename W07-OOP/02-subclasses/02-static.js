const now = new Date(); // instance of data
console.log("🚀 ~ now:", now, typeof now);

// number of miliseconds since 1.1.1970
const anotherNow = Date.now(); // calling a method of CLASS Date
console.log("🚀 ~ anotherNow:", anotherNow, typeof anotherNow);

// Static class is the one that cannot be instantiated
class MathUtils {
  static PI = 3.14;

  static add(a, b) {
    // static method
    return a + b;
  }
}

console.log(MathUtils.add(1, 2));

const mathInstance = new MathUtils();
// mathInstance.add(3, 4); error

console.log(MathUtils.PI);
console.log(Math.PI); // Built in static method PI

class DOMUtils {
  static add(element, parent) {
    const elementLocal = document.createElement(element);
    parent.appendChild(elementLocal);
  }
}

DOMUtils.add("div", "document.body");
